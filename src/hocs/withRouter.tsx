import { useRouter } from 'next/router';

export const withRouter = (Component: any) => (props: any) => {
  const router = useRouter();
  return <Component {...props} router={router} />;
};
