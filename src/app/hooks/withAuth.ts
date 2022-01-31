export function withAuth(gssp) {
  return async context => {
    const token = context.req.cookies['auth_token']

    if (!token) {
      return {
        redirect: {
          destination: '/login',
        },
      }
    }

    const gsspData = await gssp(context) // Run `getServerSideProps` to get page-specific data

    return {
      props: {
        ...gsspData.props,
        token,
      },
    }
  }
}

export function storeAuthToken(token: string) {
  document.cookie = `auth_token=${token}`
}
