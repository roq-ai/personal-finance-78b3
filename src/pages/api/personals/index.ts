import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { personalValidationSchema } from 'validationSchema/personals';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getPersonals();
    case 'POST':
      return createPersonal();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPersonals() {
    const data = await prisma.personal
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'personal'));
    return res.status(200).json(data);
  }

  async function createPersonal() {
    await personalValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.budget?.length > 0) {
      const create_budget = body.budget;
      body.budget = {
        create: create_budget,
      };
    } else {
      delete body.budget;
    }
    if (body?.expense?.length > 0) {
      const create_expense = body.expense;
      body.expense = {
        create: create_expense,
      };
    } else {
      delete body.expense;
    }
    const data = await prisma.personal.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
