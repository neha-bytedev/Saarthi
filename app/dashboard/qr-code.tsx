"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Download, Printer } from "lucide-react"

interface QRCodeProps {
  userId: string
}

export default function QRCode({ userId }: QRCodeProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)

  // In a real app, this would be a real QR code generated from the userId
  const qrCodeUrl = `/placeholder.svg?height=200&width=200`

  const handleDownload = () => {
    setIsDownloading(true)
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false)
      // In a real app, this would trigger a download of the QR code image
    }, 1500)
  }

  const handlePrint = () => {
    setIsPrinting(true)
    // Simulate printing
    setTimeout(() => {
      setIsPrinting(false)
      // In a real app, this would open a print dialog
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <QrCode className="mr-2 h-5 w-5" />
          Your QR Code
        </CardTitle>
        <CardDescription>Emergency responders can scan this code to access your medical information</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
          <img src={qrCodeUrl || "/placeholder.svg"} alt="Your medical access QR code" className="w-48 h-48" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownload} disabled={isDownloading}>
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
        <Button variant="outline" onClick={handlePrint} disabled={isPrinting}>
          <Printer className="mr-2 h-4 w-4" />
          {isPrinting ? "Printing..." : "Print"}
        </Button>
      </CardFooter>
    </Card>
  )
}

