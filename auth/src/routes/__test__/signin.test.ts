import request from 'supertest';
import { app } from '../../app';

const BASE_SIGNIN_URL = '/api/users/signin';
const BASE_SIGNUP_URL = '/api/users/signup';
const email = 'test@test.com';
const password = 'password';

const signupAction = (email: string, password: string) => {
  return request(app).post(BASE_SIGNUP_URL).send({ email, password });
};

const signinAction = (email: string, password: string) => {
  return request(app).post(BASE_SIGNIN_URL).send({ email, password });
};

it('fails when a email that does not exist is supplied', async () => {
  await signinAction(email, password).expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await signupAction(email, password).expect(201);
  await signinAction(email, 'wrong').expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await signupAction(email, password).expect(201);

  const response = await signinAction(email, password).expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
