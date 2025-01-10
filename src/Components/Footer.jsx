import React from 'react'

const Footer = () => {
  return (
    <div>
   <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="mb-2">Location: 123 Restaurant Street</p>
                <p className="mb-2">Phone: +1 234 567 8900</p>
                <p className="mb-2">Email: info@feane.com</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
                <p className="mb-2">Everyday</p>
                <p className="mb-2">10.00 Am -10.00 Pm</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-yellow-500">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-800">
              <p>&copy; 2025 All Rights Reserved By Feane Restaurant</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer