import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error'] });

async function main() {
  console.log('Testing Prisma connection...');
  const count = await prisma.admin.count();
  console.log(`Admin count: ${count}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Success!');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
