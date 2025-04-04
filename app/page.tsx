import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HospitalIcon as MedicalSymbol, Shield, QrCode, Key, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MedicalSymbol className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl">MedAccess</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#faq" className="font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex space-x-3">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Life-Saving Medical Information at Your Fingertips
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                  The Emergency Medical History Access System provides first responders with instant access to your
                  critical medical information when every second counts.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Link href="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Emergency medical access illustration"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
                <p className="text-gray-600">
                  Your medical history, allergies, and medications are securely stored on our HIPAA-compliant cloud
                  platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">QR Code Access</h3>
                <p className="text-gray-600">
                  Receive a physical card with a unique QR code that first responders can scan for instant access to
                  your information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Key className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backup Access Code</h3>
                <p className="text-gray-600">
                  Each account includes a backup numerical access code for situations where the QR code isn't readily
                  scannable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
                <p className="text-gray-600">
                  Sign up and enter your medical history, allergies, medications, emergency contacts, and other critical
                  information.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Receive Your Card</h3>
                <p className="text-gray-600">
                  We'll mail you a durable card with your unique QR code and backup access code to carry in your wallet.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Emergency Access</h3>
                <p className="text-gray-600">
                  In an emergency, medical personnel can scan your QR code or enter your access code to view your
                  critical information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Future Innovations</h2>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 max-w-3xl mx-auto">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">NFC Technology Integration</h3>
                  <p className="text-gray-600 mb-4">
                    We're exploring integration with Near Field Communication (NFC) technology to make accessing your
                    medical information even faster and more convenient.
                  </p>
                  <p className="text-gray-600">
                    With NFC, emergency responders would simply need to tap their smartphone against your card or
                    wristband to instantly access your critical medical information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Is my medical information secure?</h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard encryption and security practices to protect your data. Our platform is
                  fully HIPAA-compliant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Who can access my information?</h3>
                <p className="text-gray-600">
                  Only authorized medical personnel with your QR code or access code can view your information. Each
                  access is logged for your security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What if I lose my card?</h3>
                <p className="text-gray-600">
                  You can request a replacement card from your account dashboard. Your old card's QR code will be
                  deactivated for security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Can I update my information?</h3>
                <p className="text-gray-600">
                  Yes, you can update your medical information at any time through your secure online dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Yourself?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of people who trust MedAccess with their emergency medical information.
            </p>
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MedicalSymbol className="h-6 w-6 text-red-400" />
                <span className="font-bold text-xl">MedAccess</span>
              </div>
              <p className="text-gray-400">Life-saving medical information at your fingertips.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/hipaa" className="text-gray-400 hover:text-white">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@medaccess.com</li>
                <li className="text-gray-400">1-800-MED-ACCESS</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MedAccess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

