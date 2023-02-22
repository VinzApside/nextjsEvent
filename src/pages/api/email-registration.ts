// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ImportedDatas } from '@/models/datas';
import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  message: string;
};

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath: string): ImportedDatas {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      message: 'No events data found',
    });
  }

  if (method === 'POST') {
    const { eventId, email } = req.body;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    if (!email || !email.match(regexEmail)) {
      res.status(422).json({
        message: 'Invalid email address',
      });
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({
            message: 'This email has already been registred',
          });
          return ev;
        }
        return { ...ev, emails_registered: [...ev.emails_registered, email] };
      }
      return ev;
    });
    fs.writeFileSync(filePath, JSON.stringify({ events_categories: events_categories, allEvents: newAllEvents }));

    res.status(200).json({ message: 'You has been registred successfully' });
  } else {
    res.status(200).json({ message: 'Nope' });
  }
}
