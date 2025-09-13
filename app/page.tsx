import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Database, Lock, Users, Globe, FileText, Mail, CheckCircle } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-spacing">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy for{' '}
                <span className="text-gradient">AdSnap Extension</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy is our priority. Learn how we collect, use, and protect your information when using our Chrome extension.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <FileText className="w-4 h-4" />
                <span>Last Updated: September 13, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  AdSnap ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section id="information-collected" className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mx-auto mb-4">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-lg text-gray-600">We collect only the data necessary to provide our services effectively</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Data from Facebook Ads Library */}
                <div className="card hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Facebook Ads Library Data</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Ad creative content and images</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Ad spend and performance metrics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Publicly available advertiser information</span>
                    </li>
                  </ul>
                </div>

                {/* Browser Data */}
                <div className="card hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Database className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Browser Data</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Local storage preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Tab information for service access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Cached ad data for performance</span>
                    </li>
                  </ul>
                </div>

                {/* User Preferences */}
                <div className="card hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">User Preferences</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Extension settings and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Custom preferences and filters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Display and interface preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section id="data-usage" className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-lg text-gray-600">All data processing occurs locally in your browser for maximum privacy</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Uses</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Analyze and display Facebook ad creatives and performance data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Help you organize and track ad information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Improve extension functionality and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Maintain your preferences across browser sessions</span>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Processing</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>All data processing occurs locally in your browser</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>No data is transmitted to external servers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Only publicly available Facebook Ads Library information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Complete user control over stored data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Storage and Security */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Storage and Security</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Storage</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>All data stored locally using Chrome's storage APIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>No data transmitted to external servers or third parties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Complete data deletion by uninstalling the extension</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Chrome's built-in security features for data storage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Limited data access to explicitly granted permissions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Compliance with Chrome Web Store security guidelines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Permissions and Access */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Permissions and Access</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Permissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Storage</h4>
                        <p className="text-sm text-gray-600">Save your preferences and cache ad data locally</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">ActiveTab</h4>
                        <p className="text-sm text-gray-600">Access Facebook Ads Library pages when you interact with the extension</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Tabs</h4>
                        <p className="text-sm text-gray-600">Detect when you're on Facebook Ads Library pages</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Scripting</h4>
                        <p className="text-sm text-gray-600">Inject content scripts that analyze ad elements</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Host Permissions</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Facebook Ads Library</h4>
                        <p className="text-sm text-gray-600">Access to Facebook's Ads Library pages for ad data collection</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights and Controls */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Controls</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Control</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Clear all stored data by uninstalling the extension</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Modify extension settings through the options page</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Disable the extension at any time</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Access and Deletion</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>All data stored locally and can be deleted by uninstalling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>Clear browser storage manually through Chrome's settings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>No external databases of your information maintained</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="contact" className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mx-auto mb-6">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">salamadev00@gmail.com</p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Notice */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This Privacy Policy complies with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chrome Web Store Developer Program Policies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">General Data Protection Regulation (GDPR)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">California Consumer Privacy Act (CCPA)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Other applicable privacy laws and regulations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
