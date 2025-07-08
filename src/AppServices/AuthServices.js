// import auth from '@react-native-firebase/auth';

// export const signUp = async (email, password) => {
//   try {
//     const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//     const user = userCredential.user;

//     // Send email verification
//     await user.sendEmailVerification();

//     return { user, error: null, message: 'Verification email sent. Please check your inbox.' };
//   } catch (error) {
//     return { user: null, error: error.code || error.message };
//   }
// };

// export const signIn = async (email, password) => {
//   try {
//     const userCredential = await auth().signInWithEmailAndPassword(email, password);
//     const user = userCredential.user;

//     // Check if email is verified
//     if (!user.emailVerified) {
//       await auth().signOut(); // Sign out the user immediately
//       return { user: null, error: 'Please verify your email before signing in.' };
//     }

//     return { user, error: null };
//   } catch (error) {
//     return { user: null, error: error.code || error.message };
//   }
// };

// export const resendVerificationEmail = async () => {
//   try {
//     const user = auth().currentUser;
//     if (user && !user.emailVerified) {
//       await user.sendEmailVerification();
//       return { success: true, message: 'Verification email sent successfully.' };
//     }
//     return { success: false, message: 'User not found or already verified.' };
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// };
