import React from 'react'

const Footer = () => {
  return (
    <footer className=" overflow-hidden scrollbar-hide  py-8">
        <div className="relative mb-10 w-11/12 mx-auto my-5">
              <hr className="border-0 w-full  h-[.5px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4" />
              <div className=" w-full rounded-full absolute top-[-1px] move-infinite">
                <div className="w-[5px] h-[3px] bg-indigo-300 rounded-full"></div>
              </div>
            </div>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className='text-text'>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className='text-text'>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className='text-text'>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className='text-text'>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Docs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex text-text space-x-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer