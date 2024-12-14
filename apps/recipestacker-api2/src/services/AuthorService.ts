import { Prisma, PrismaClient } from '@prisma/client'
import { FastifyBaseLogger } from 'fastify'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const DEFAULT_TAKE = 15
export const DEFAULT_SKIP = 0

interface AuthorServiceProps {
  logger: FastifyBaseLogger
  prisma: PrismaClient
}

interface FindOneAuthorProps {
  author_id: string
}

interface FindManyAuthorProps {
  author_name?: string
  books?: string
  sortColumn?: string
  sortOrder?: SortOrder
  take?: number
  skip?: number
}

interface FindUserProps{
  user_id: string
}

interface CreateBookPropertyProps {
  book_id?: string
  book_name?: string
  book_description?: string
  book_reccomendation?: string
  book_rating?: number
  genre?: string
  book_synopsis?: string
}

interface UpdateOneAuthorProps {
  author_id: string
  author_name: string
  author_description: string
  flag: boolean
  is_deleted: boolean
  book_properties?: CreateBookPropertyProps[] | null
}

interface CreateOneAuthorProps {
  author_name: string
  author_description: string
  flag: boolean
  book_properties: CreateBookPropertyProps[]
}

interface CreateOneCommentProps {
  book_id: string
  comments: string
}

interface CreateOneUserProps {
  user_id: string
  user_name: string
email?: string
password: string
}

interface GetAuthorOrderByProps {
  sortColumn: string
  sortOrder: SortOrder
}

export class AuthorService {
  logger: FastifyBaseLogger
  prisma: PrismaClient

  constructor({ logger, prisma }: AuthorServiceProps) {
    this.logger = logger
    this.prisma = prisma
  }

  getAuthorOrderBy({
    sortOrder,
    sortColumn,
  }: GetAuthorOrderByProps): Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[] {
    return {
      [sortColumn]: sortOrder,
    }
  }

  async findOneAuthor(props: FindOneAuthorProps) {
    this.logger.info({ props }, 'findOneAuthors');
    const { author_id } = props;
    const author = await this.prisma.author.findFirst({
      where: {
        author_id,
        is_deleted: false,
      },
      include: {
        book_properties: {
          include: {
            book: true,
          },
        },
      },
    }
  );
    console.log('Fetched Author:', author);

    return author;
  }
/*
  async updateOneAuthor(props: UpdateOneAuthorProps) {
    this.logger.info({ props }, 'updateOneAuthors')
    const { user_id } = await this.prisma.user.findFirstOrThrow()
    const { book_properties, author_id, ...rest } = props
    const updatedAuthor = await this.prisma.author.update({
      where: {
        author_id,
      },
      data: {
        ...rest,
        user: {
          connect: { user_id },
        },
        book_properties: {
          upsert: book_properties?.map(
            ({ book_id, book_name, book_description, book_rating, book_reccomendation, book_synopsis, genre }) => ({
              where: {
                book_id_author_id: {
                  book_id: book_id || '',
                  author_id,
                },
              },
              update: {
                book_rating,
                book_reccomendation,
                book_synopsis,
                genre,
              },
              create: {
                book: book_id
                  ? {
                      connect: {
                        book_id,
                      },
                    }
                  : {
                      create: {
                        author_name: book_name,
                        author_description: book_description,
                      },
                    },
                book_rating,
                book_reccomendation,
                book_synopsis,
                genre,
              },
            }),
          ),
        },
      },
    })
    return updatedAuthor
  }
*/
/*
async updateOneAuthor(props: UpdateOneAuthorProps) {
  this.logger.info({ props }, 'updateOneAuthor');

  const { author_id, book_properties, ...rest } = props;

  const updatedAuthor = await this.prisma.author.update({
    where: {
      author_id,
    },
    data: {
      ...rest, // Update other author fields (e.g., `author_name`, `author_description`)
      books: {
        upsert: book_properties?.map(
          ({
            book_id,
            book_name,
            book_description,
            book_rating,
            book_reccomendation,
            book_synopsis,
            genre,
          }) => ({
            where: {
              // Match on composite key: `book_id` and `author_id`
              book_id_author_id: {
                book_id: book_id || '', // Use empty string if `book_id` is undefined
                author_id,
              },
            },
            update: {
              // Update `book_properties` for an existing book
              book_properties: {
                update: {
                  book_rating,
                  book_reccomendation,
                  book_synopsis,
                  genre,
                },
              },
              book_name,
              book_description, // Update book details if needed
            },
            create: {
              // Create new `book` and `book_properties` if the book does not exist
              book: book_id
                ? {
                    connect: { book_id },
                  }
                : {
                    create: {
                      book_name,
                      book_description,
                    },
                  },
              book_properties: {
                create: {
                  book_rating,
                  book_reccomendation,
                  book_synopsis,
                  genre,
                },
              },
            },
          })
        ),
      },
    },
  });

  return updatedAuthor;
}*/

async updateOneAuthor(props: UpdateOneAuthorProps) {
  const { author_id, book_properties, ...rest } = props;

  const updatedAuthor = await this.prisma.author.update({
    where: { author_id },
    data: {
      ...rest,
    },
  });
  if (book_properties && book_properties.length > 0) {
    await Promise.all(
      book_properties.map(
        async ({
          book_id,
          book_name,
          book_description,
          book_rating,
          book_reccomendation,
          book_synopsis,
          genre,
        }) => {
          if (book_id) {
            await this.prisma.book.update({
              where: { book_id },
              data: {
                book_name,
                book_description,
                book_properties: {
                  upsert: {
                    where: {
                      book_id_author_id: {
                        book_id,
                        author_id,
                      },
                    },
                    create: {
                      book_rating,
                      book_reccomendation,
                      book_synopsis,
                      genre,
                    },
                    update: {
                      book_rating,
                      book_reccomendation,
                      book_synopsis,
                      genre,
                    },
                  },
                },
              },
            });
          } else {
            await this.prisma.book.create({
              data: {
                book_name,
                book_description,
                author: { connect: { author_id } },
                book_properties: {
                  create: {
                    book_rating,
                    book_reccomendation,
                    book_synopsis,
                    genre,
                    author: { connect: { author_id } },
                  },
                },
              },
            });
          }
        }
      )
    );
  }

  return updatedAuthor;
}

async createOneAuthor(props: CreateOneAuthorProps) {
  const { author_name, author_description, flag, book_properties } = props
  const { user_id } = await this.prisma.user.findFirstOrThrow()
  const author = await this.prisma.author.create({
    data: {
      user: {
        connect: {
          user_id,
        },
      },
      author_name,
      author_description,
      flag,
    },
  })
  const author_id = author.author_id
  console.log('Generated author_id:', author_id)

  if (book_properties.length > 0) {
    await Promise.all(
      book_properties.map(
        async ({ book_id, book_description, book_name, book_reccomendation, book_rating, book_synopsis, genre }) => {
          await this.prisma.bookProperties.create({
            data: {
              author: {
                connect: {
                  author_id,
                },
              },
              genre,
              book_synopsis,
              book_reccomendation,
              book_rating,
              book: book_id
                ? {
                    connect: { book_id },
                  }
                : {
                    create: {
                      book_name,
                      book_description,
                      author: {
                        connect: { author_id },
                      },
                      user: {
                        connect: { user_id },
                      },
                    },
                  },
            },
          })
        },
      ),
    )
  }
  return author
}


  async findManyAuthors(props: FindManyAuthorProps) {
    this.logger.info({ props }, 'findManyAuthors')
    const {
      author_name,
      books,
      sortColumn = 'author_name',
      sortOrder = SortOrder.ASC,
      take = 100,
      skip = DEFAULT_SKIP,
    } = props

    const booksArray = books ? books.split(',') : []
    const orderBy = this.getAuthorOrderBy({ sortColumn, sortOrder })

    const authors = await this.prisma.author.findMany({
      where: {
        is_deleted: false,
        author_name: {
          contains: author_name,
        },
        AND: booksArray.map((book) => ({
          book_properties: {
            some: {
              book: {
                book_name: {
                  contains: book.trim(),
                },
              },
            },
          },
        })),
      },
      orderBy,
      take,
      skip,
      include: {
        book_properties: {
          include: {
            book: true,
          },
       },
      },
    })

    return authors
  }

  async createOneComment(props: CreateOneCommentProps) {
    const { comments, book_id} = props;

    // Ensure the user exists
    const { user_id } = await this.prisma.user.findFirstOrThrow();

    // Create the comment associated with the user and book
    const newComment = await this.prisma.comment.create({
      data: {
        user: {
          connect: {
            user_id,
          },
        },
        book: {
          connect: {
            book_id,
          },
        },
        comments: comments,
      },
    });

    return newComment;
  }

/*
  async createOneUser(props: CreateOneUserProps) {
    const { user_id, user_name, email, password} = props;

    // Ensure the user exists (if this is needed)
    const existingUser = await this.prisma.user.findUnique({
      where: { user_id },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create the new user and associate with a book and comments
    const newUser = await this.prisma.user.create({
      data: {
        user_id,
        user_name,
        email,
        password,
      },
    });

    return newUser;
  }*/

    async createOneUser(props: CreateOneUserProps) {
      const { user_name, email, password, user_id } = props;

      // Optional: Check if a user with the same email already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error('A user with this email already exists.');
      }

      // Create the new user
      const newUser = await this.prisma.user.create({
        data: {
          user_name,
          email,
          password,
          user_id,
        },
      });

      return newUser;
    }


}
