import request from 'supertest'
import app from '../../src/app'

import User from '../../src/models/User'
import userData from '../data/user.json'

describe('Listing Users on public route', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    console.log('beforeEach()...')
  })

  it('should access a public route and get a list with all users', async () => {
    await User.create(userData)

    const response = await request(app)
      .get('/api/users')

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1)
  })

  it("should access a private route and not get the users's list", async () => {
    await User.create(userData)

    const response = await request(app)
      .get('/api/private/users')

    expect(response.status).toBe(401)
  })
})
