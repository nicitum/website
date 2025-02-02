import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white text-blue-500 py-12"> {/* Set background to white and text to blue */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#003366]">Nicitum</h3> {/* Set text to blue */}
            <p className="text-gray-600"> {/* Set text to blue */}
              Empowering your digital journey with cutting-edge solutions for over two decades.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#003366]">Quick Links</h4> {/* Set text to blue */}
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                  Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#003366]">Contact Us</h4> {/* Set text to blue */}
            <p className="text-gray-500"> {/* Set text to blue */}
              123 Tech Street, Silicon Valley, CA 94000
            </p>
            <p className="text-gray-500"> {/* Set text to blue */}
              Email: info@Nicitum.com
            </p>
            <p className="text-gray-500"> {/* Set text to blue */}
              Phone: (123) 456-7890
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#003366]">Follow Us</h4> {/* Set text to blue */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                <Twitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                <LinkedIn />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#003366] transition-colors"> {/* Set text to blue */}
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#003366] text-center"> {/* Set border color to blue */}
          <p className="text-[#003366]"> {/* Set text to blue */}
            &copy; {new Date().getFullYear()} Nicitum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
