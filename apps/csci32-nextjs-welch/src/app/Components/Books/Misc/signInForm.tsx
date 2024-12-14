import React, { useState } from 'react';
import  Input  from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { Field } from '@repo/ui/field';
import { FieldGroup } from '@repo/ui/fieldGroup';
import { Flex } from '@repo/ui/flex';
import { Header } from '@repo/ui/header';
import { Label } from '@repo/ui/label';
import { Variants } from '@repo/ui/variant';

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    user_name: '',
    password: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSignInData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignIn = async () => {
    setLoading(true);

    try {
      console.log('Attempting sign-in with:', signInData);

      // Mock sign-in process. Replace with your real API call.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Welcome back, ${signInData.user_name}!`);
    } catch (error) {
      console.error('Sign-in failed:', error);
      alert('Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header variant="h3">Sign In</Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
        className="flex flex-col gap-4"
      >
        <FieldGroup>
          <Field>
            <Label>Username</Label>
            <Input
            name=""
            id="a"

              placeholder="Enter your username"
              value={signInData.user_name}
              onChange={(value) => handleInputChange('user_name', value)}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              id="a"
            name=""
              type="password"
              placeholder="Enter your password"
              value={signInData.password}
              onChange={(value) => handleInputChange('password', value)}
            />
          </Field>
          <Field>
            <Label>Email (optional)</Label>
            <Input
              id="a"
            name=""
              type="email"
              placeholder="Enter your email"
              value={signInData.email}
              onChange={(value) => handleInputChange('email', value)}
            />
          </Field>
        </FieldGroup>

        <Flex className="justify-end gap-2">
          <Button type="submit" variant={Variants.Primary} >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default SignInForm;
