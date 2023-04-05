import awsExports from '../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);

export default function Register() {
  return (
    <>
      <Authenticator />
      
    </>
  )
}
