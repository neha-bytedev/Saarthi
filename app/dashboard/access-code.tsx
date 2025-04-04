"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Key, RefreshCw, Copy } from "lucide-react"

interface AccessCodeProps {
  accessCode: string
}

export default function AccessCode({ accessCode }: AccessCodeProps) {
  const [isRegenerating, setIsRegenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleRegenerate = () => {
    setIsRegenerating(true)
    // Simulate regenerating the access code
    setTimeout(() => {
      setIsRegenerating(false)
      // In a real app, this would call an API to generate a new access code
    }, 1500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(accessCode)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Key className="mr-2 h-5 w-5" />
          Your Access Code
        </CardTitle>
        <CardDescription>This code can be used when a QR code scanner is not available</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
          <p className="text-2xl font-mono tracking-wider">{accessCode}</p>
          <p className="text-sm text-gray-500 mt-2">Share this code with emergency responders</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleRegenerate} disabled={isRegenerating}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {isRegenerating ? "Regenerating..." : "Regenerate"}
        </Button>
        <Button variant="outline" onClick={handleCopy}>
          <Copy className="mr-2 h-4 w-4" />
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </CardFooter>
    </Card>
  )
}

