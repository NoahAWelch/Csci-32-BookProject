/*import React, { useState } from 'react';
import Input from "@repo/ui/input";

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add logic to handle sign-in, such as making an API call.
    console.log('Signing in with:', { username, password });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Input
        name="name-query"
        id="name-query"
        value={username}
        onChange={(newUsername) => setUsername(newUsername)}
        placeholder="Enter your username"
      />
      <Input
        name="password-query"
        id="password-query"
        value={password}

        onChange={(newPassword) => setPassword(newPassword)}
        placeholder="Enter your password"
        type="password"
      />
      <button onClick={handleSignIn}>Submit</button>
    </div>
  );
}*/
/*
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { AuthorContext } from '../../../context/authorContext';

export default function SignIn() {
  const { setShowAuthorForm, mutate } = useContext(AuthorContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState<string | null>(null); ({

  })

  const handleSignIn = () => {
    if (!username || !password) {
      alert('Please enter a valid username and password.');
      return;
    }

    // Mock logic to generate a user_id based on the username
    const newUserId = `user_${username}_${Date.now()}`;
    setUserId(newUserId);

    console.log('User signed in:', { username, password, userId: newUserId });
    alert(`Welcome, ${username}! Your user ID is now ${newUserId}.`);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Input
        name="username"
        id="username"
        value={username}
        onChange={(newUsername) => setUsername(newUsername)}
        placeholder="Enter your username"
      />
      <Input
        name="password"
        id="password"
        value={password}
        onChange={(newPassword) => setPassword(newPassword)}
        placeholder="Enter your password"
        type="password"
      />
      <button onClick={handleSignIn}>Submit</button>
      {userId && <p>Current User ID: {userId}</p>}
    </div>
  );
}*/
/*
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { AuthorContext } from '../../../context/authorContext';
import { createUser } from '../../../hook/useAuthors'

export default function SignIn() {
  const { setUserId, setUser } = useContext(AuthorContext);
  const [signInData, setSignInData] = useState({
    user_name: '',
    password: '',
    email: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setSignInData({
      ...signInData,
      [field]: value,
    });
  };

  const handleSignIn = () => {
    if (!signInData.user_name || !signInData.password) {
      alert('Please fill out all required fields.');
      return;
    }

    // Mock logic for user sign-in
    const newUserId = `user_${signInData.user_name}_${Date.now()}`;
    setUserId(newUserId);
    setUser({
      user_id: newUserId,
      user_name: signInData.user_name,
      password: signInData.password,
      email: signInData.email,
    });

    alert(`Welcome, ${signInData.user_name}! Your user ID is now ${newUserId}.`);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <Input
          name="user_name"
          id="user_name"
          value={signInData.user_name}
          onChange={(value) => handleInputChange('user_name', value)}
          placeholder="Enter your username"
        />
        <Input
          name="password"
          id="password"
          value={signInData.password}
          onChange={(value) => handleInputChange('password', value)}
          placeholder="Enter your password"
          type="password"
        />
        <Input
          name="email"
          id="email"
          value={signInData.email}
          onChange={(value) => handleInputChange('email', value)}
          placeholder="Enter your email"
          type="email"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}*//*
import React, { useContext, useState } from 'react';
import Input from '@repo/ui/input';
import { AuthorContext } from '../../../context/authorContext';
import { createAuthor, CreateAuthorProps, createUser, CreateUserProps } from '../../../hook/useAuthors'; // Assuming the helper is here
import { Button } from '@repo/ui/button';
import { Field } from '@repo/ui/field';
import { FieldGroup } from '@repo/ui/fieldGroup';
import { Flex } from '@repo/ui/flex';
import { Header } from '@repo/ui/header';
import { Label } from '@repo/ui/label';
import { Variants } from '@repo/ui/variant';
import { userInfo } from 'os';

export default function SignIn() {*/

  /*
  const { setUserId, setUser } = useContext(AuthorContext);
  const [signInData, setSignInData] = useState({
    user_name: '',
    password: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSignInData({
      ...signInData,
      [field]: value,
    });
  };

  const handleSignIn = async () => {
    if (!signInData.user_name || !signInData.password || !signInData.email) {
      alert('Please fill out all required fields.');
      return;
    }

    setLoading(true);

    try {
      const newUser = await createUser({
        ...signInData,
        user_id: '', // Optional; server generates this
      });

      // Update context with the new user data
      setUserId(newUser.user_id);
      setUser(newUser);

      alert(`Welcome, ${newUser.user_name}! Your user ID is ${newUser.user_id}.`);
    } catch (error) {
      alert(`Sign-in failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };*/
/*
  const { setShowAuthorForm, mutate } = useContext(AuthorContext)
  const [userFormData, setUserFormData] = useState( {
    user_name: '',
    password: '',
  })
    const [userInformation, setUserInformation] = useState(
      [
      {
userInfo:{
    email: '',
    user_id: '',
},}])

const userInfoChange = (index: number, field: string, value: string | number) => {
  const updatedUsers = userInformation.map((userInfo, idx) =>
      idx === index ? { ...userInfo, [field]: value } : userInfo
    )
    setUserInformation(updatedUsers)
  }

    const userChange = (
      index: number, field: string, value: string | number) => {
      const updatedUsers = userInformation.map((userInfo, idx) =>
        idx === index
          ? { ...userInfo, userInfo: { ...userInfo.userInfo, [field]: value } }
          : userInfo
      );
      setUserInformation(updatedUsers);
    };

    const removeUser = (index: number) => {
      setUserInformation(userInformation.filter((_, idx) => idx !== index))
    }


  const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!userFormData.user_name || !userFormData.password) {
      return alert('Please fill out all required fields for the user.')
    }

    const formattedUsers = userInformation.map((userInfo) => ({
      ...userInfo,
      ...userInfo.userInfo,
      userInfo: undefined,
    }));

    const userData: CreateUserProps = {
      ...userFormData,
      userInformation: formattedUsers
      ,
      //userInfo: []
    }
    console.log('Payload to Backend:', userData)

    await createUser(userData)
    setUserFormData({     user_name: '',
      password: '',
      //email: '',
    //user_id: '',
    })
    mutate()
    setShowAuthorForm(false)
    alert(`Your username "${userFormData.user_name}" has been added successfully!`)
  }

  return (
    <div>
      <Header variant="h3">Create User</Header>
      <form className="flex flex-col gap-4" onSubmit={Submit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="User-name">User Name</Label>
            <Input
              id="author-name"
              name="author-name"
              placeholder="username"
              value={userFormData.user_name}
              onChange={(value) => setUserFormData({ ...userFormData, user_name: value })}
            />
          </Field>
          <Field>
          <Label htmlFor="flag">password</Label>
          <Input
              name="flag"
              id="flag"

              placeholder="password"
              value={userFormData.password}
              onChange={( value) => setUserFormData({...userFormData, password: value})}
            />
              </Field>
        </FieldGroup>

        <p className="text-xl font-bold">user info</p>
        {userInformation.map((userInfo, index) => (
          <FieldGroup key={index} className="ml-4 bg-gray-200 shadow-md rounded-lg p-4">
            <Flex>
              <Label>Book {index + 1}</Label>
              {userInformation.length > 1 && (
                <Button
                  variant={Variants.TertiaryReview}
                  onClick={() => removeUser(index)}
                >
                  Remove
                </Button>
              )}
            </Flex>

            <Input
              name={`book-name-${index}`}
              id={`book-name-${index}`}
              placeholder="userid"
              value={userInfo.userInfo.user_id}
              onChange={(value) => userChange(index, 'user_name', value)}
            />
            <Input
              name={`userInfo-description-${index}`}
              id={`userInfo-description-${index}`}
              placeholder="email"
              value={userInfo.userInfo.email}
              onChange={(value) => userChange(index, 'email', value)}
            />
            <Input
              name={`userInfo-genre-${index}`}
              id={`userInfo-genre-${index}`}
              placeholder="userid"
              value={userInfo.userInfo.user_id}
              onChange={(value) => userInfoChange(index, 'genre', value)}
            />
            <Input
              name={`userInfo-rating-${index}`}
              id={`userInfo-rating-${index}`}
              placeholder="email"
              value={userInfo.userInfo.email}
              onChange={(value) => userInfoChange(index, 'userInfo_rating', Number(value))}
            />

           </FieldGroup>
        ))}

        <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Secondary2}>
            Submit
          </Button>

        </Flex>
      </form>
    </div>
  )
}*/

 /* return (
    <div>
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <Input
          name="user_name"
          id="user_name"
          value={signInData.user_name}
          onChange={(value) => handleInputChange('user_name', value)}
          placeholder="Enter your username"
        />

        <Input
          name="password"
          id="password"
          value={signInData.password}
          onChange={(value) => handleInputChange('password', value)}
          placeholder="Enter your password"
          type="password"
        />
        <Input
          name="email"
          id="email"
          value={signInData.email}
          onChange={(value) => handleInputChange('email', value)}
          placeholder="Enter your email"
          type="email"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

      </form>

    </div>
       );
}*/

import React, { useState, useContext } from 'react';
import { AuthorContext } from '../../../context/authorContext';
import { CreateUserProps, createUser } from '../../../hook/useAuthors';
import  Input  from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { Field } from '@repo/ui/field';
import { FieldGroup } from '@repo/ui/fieldGroup';
import { Flex } from '@repo/ui/flex';
import { Header } from '@repo/ui/header';
import { Label } from '@repo/ui/label';
import { Variants } from '@repo/ui/variant';

const CreateUserForm = ({ onUserCreated }: { onUserCreated: (userId: string) => void }) => {
  const { setShowAuthorForm, mutate } = useContext(AuthorContext);
  const [userFormData, setUserFormData] = useState({
    user_name: '',
    password: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userFormData.user_name || !userFormData.password) {
      return alert('Please fill out all required fields.');
    }
    const newUserId = crypto.randomUUID();
    const payload: CreateUserProps = {
      user_id: crypto.randomUUID(),
      user_name: userFormData.user_name,
      password: userFormData.password,
      email: userFormData.email || undefined,
    };

    try {
      await createUser(payload);
      alert(`User "${userFormData.user_name}" created successfully!`);
      onUserCreated(newUserId);
      setUserFormData({ user_name: '', password: '', email: '' });
      mutate();
      setShowAuthorForm(false);
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  return (
    <div>
      <Header variant="h3">Create User</Header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <Label>User Name</Label>
            <Input
            id="a"
            name=""
              placeholder="Enter your username"
              value={userFormData.user_name}
              onChange={(value) => setUserFormData({ ...userFormData, user_name: value })}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
            id="a"
            name=""
              type="password"
              placeholder="Enter your password"
              value={userFormData.password}
              onChange={(value) => setUserFormData({ ...userFormData, password: value })}
            />
          </Field>
          <Field>
            <Label>Email (optional)</Label>
            <Input
            id="a"
            name=""
              type="email"
              placeholder="Enter your email"
              value={userFormData.email}
              onChange={(value) => setUserFormData({ ...userFormData, email: value })}
            />
          </Field>
        </FieldGroup>

        <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Secondary2}>
            Create User
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default CreateUserForm;
