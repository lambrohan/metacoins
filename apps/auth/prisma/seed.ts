import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

const userData: Prisma.UserCreateManyInput[] = [
  {
    email: faker.internet.email(),
  },
  {
    email: faker.internet.email(),
  },
];

async function main() {
  console.log('Auth Seeding Init');
  await prisma.user.createMany({
    data: userData,
  });
  console.log('users created');
  console.log('Auth Seeding Finished');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
