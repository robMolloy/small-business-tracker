const sendEmailVerificationLink = async (user) => {
  return new Promise((res, rej) => {
    user
      .sendEmailVerification()
      .then(() => {
        res([true]);
      })
      .catch((error) => {
        rej([false, error.message]);
      });
  });
};

export default sendEmailVerificationLink;
