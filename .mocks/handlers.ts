// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /user request
  rest.get('https://myapi.dev/tasks', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tasks: [
          {
            id: 1,
            name: '買い物',
          },
          {
            id: 2,
            name: '勉強',
          },
        ],
      }),
    )
  }),
]
