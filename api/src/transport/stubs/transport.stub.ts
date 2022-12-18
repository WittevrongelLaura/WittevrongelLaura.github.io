import { ObjectId } from 'mongodb'
import { CreateTransportInput } from '../dto/create-transport.input'
import { Transport } from '../entities/transport.entity'

export const createTransportInputStub = (): CreateTransportInput => {
  const t = new CreateTransportInput()
  // t.name = 'testtransportame'
  t.amountOfSeats = 5
  t.people = []
  return t
}

export const createTransport = (): Transport => {
  const t = new Transport()
  t.id = new ObjectId('8cb8791bdee9')
  // t.name = 'testtransportnname'
  t.amountOfSeats = 4
  t.people = []
  return t
}
