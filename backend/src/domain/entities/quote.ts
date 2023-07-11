export class Quote {
  customerName: string;
  from: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
  passengerCount: number;
  modeOfTransportation: string;

  constructor (customerName: string, from: string, destination: string, departureDate: Date, returnDate: Date, passengerCount: number, modeOfTransportation: string) {
    this.customerName = customerName;
    this.from = from;
    this.destination = destination;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
    this.passengerCount = passengerCount;
    this.modeOfTransportation = modeOfTransportation;
  }
}
