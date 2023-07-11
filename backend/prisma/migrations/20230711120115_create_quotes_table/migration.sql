-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "customerName" VARCHAR(50) NOT NULL,
    "from" VARCHAR(50) NOT NULL,
    "destination" VARCHAR(50) NOT NULL,
    "departureDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "passengerCount" INTEGER NOT NULL,
    "modeOfTransportation" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);
