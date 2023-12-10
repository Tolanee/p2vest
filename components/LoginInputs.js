import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Platform} from 'react-native';
import {UserIcon, KeyIcon} from '../assets/svgs/LoginSvgs';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const verifyUserSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be at least 6 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain letters'),
});

export default function LoginInputs() {
  const navigation = useNavigation();
  const android = Platform.OS === 'android';
  const ios = Platform.OS === 'ios';
  const submitHandler = async values => {
    navigation.navigate('Wallet');
  };
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      validationSchema={verifyUserSchema}
      onSubmit={submitHandler}>
      {({handleChange, handleBlur, handleSubmit, touched, values}) => (
        <View className="mx-10 ">
          <View
            className={`bg-white flex flex-row items-center rounded-lg mt-3 ${
              ios ? 'p-3' : 'px-2'
            } space-x-2`}>
            <UserIcon />
            <TextInput
              className="flex-1 flex-wrap"
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              touched={touched.username}
            />
          </View>
          <ErrorMessage
            name="username"
            render={msg => (
              <Text
                style={{
                  fontSize: 12,
                  color: '#F00D0D',
                  fontFamily: 'Manrope-Light',
                  marginTop: 5,
                }}>
                {msg}
              </Text>
            )}
          />
          <View
            className={`bg-white flex flex-row items-center rounded-lg my-3 ${
              ios ? 'p-3' : 'px-2'
            } space-x-2`}>
            <View className="flex flex-row space-x-2 items-center flex-1">
              <KeyIcon />
              <View className="flex-1">
                <TextInput
                  className="w-full "
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                />
              </View>
            </View>
            <View>
              <Text className="text-[#1293A9] text-sm">Forgot</Text>
            </View>
          </View>

          <ErrorMessage
            name="password"
            render={msg => (
              <Text
                style={{
                  fontSize: 12,
                  color: '#F00D0D',
                  fontFamily: 'Manrope-Light',
                  marginTop: 5,
                }}>
                {msg}
              </Text>
            )}
          />

          <TouchableOpacity
            className="p-[14px]  bg-[#1293A9] rounded-lg my-3  flex items-center justify-center"
            onPress={handleSubmit}>
            <Text className="text-white">Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
