import React, { useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import arrowIcon from '../images/nav-icon-arrow-down.svg'
import SlideDownNav from './SlideDownNav'

interface DocsNavMobileProps {
  templateId: string
  sideNav: any
  globalNav: string[]
}

export default function DocsNav({
  templateId,
  sideNav,
  globalNav,
}: DocsNavMobileProps) {
  const intl = useIntl()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = `hidden`)
      : (document.body.style.overflow = `unset`)
  }, [isOpen])

  return (
    <nav
      className={`bg-lightGray w-screen overflow-y-auto ${
        isOpen ? 'absolute top-24 h-screen overflow-y-auto' : null
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center py-4 border-t border-b border-gray-200"
      >
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="#26E0A2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.30679 15C3.96693 15 3.69141 15.2798 3.69141 15.625C3.69141 15.9702 3.96693 16.25 4.30679 16.25H6.76832C7.1082 16.25 7.38371 15.9702 7.38371 15.625C7.38371 15.2798 7.1082 15 6.76832 15H4.30679Z" />
          <path d="M3.69141 12.5C3.69141 12.1548 3.96693 11.875 4.30679 11.875H9.22986C9.56974 11.875 9.84524 12.1548 9.84524 12.5C9.84524 12.8452 9.56974 13.125 9.22986 13.125H4.30679C3.96693 13.125 3.69141 12.8452 3.69141 12.5Z" />
          <path d="M4.30679 8.75C3.96693 8.75 3.69141 9.02981 3.69141 9.375C3.69141 9.72019 3.96693 10 4.30679 10H11.6914C12.0313 10 12.3068 9.72019 12.3068 9.375C12.3068 9.02981 12.0313 8.75 11.6914 8.75H4.30679Z" />
          <path d="M16 6.87994V6.875C16 6.86188 15.9996 6.84875 15.9987 6.83569C15.9997 6.85038 16.0001 6.86519 16 6.87994L9.31316 0.00562983C9.28602 0.00190036 9.25851 0 9.23076 0H3.07692C1.37759 0 0 1.39911 0 3.125V16.875C0 18.6009 1.37759 20 3.07692 20H12.9231C14.6224 20 16 18.6009 16 16.875V6.87994ZM8.61537 4.375C8.61537 6.10089 9.99297 7.5 11.6923 7.5H14.7692V16.875C14.7692 17.9106 13.9427 18.75 12.9231 18.75H3.07692C2.05732 18.75 1.23077 17.9106 1.23077 16.875V3.125C1.23077 2.08947 2.05732 1.25 3.07692 1.25H8.61537V4.375ZM9.84614 2.13388L13.8989 6.25H11.6923C10.6727 6.25 9.84614 5.41053 9.84614 4.375V2.13388Z" />
        </svg>
        <span className="pl-2 font-bold">
          {intl.formatMessage({ id: 'nav-docs' })}
        </span>
        <img
          className={`transform duration-300 ease-in-out ml-2 ${
            isOpen ? null : '-rotate-180'
          }`}
          src={arrowIcon}
          alt="Substrate Documentation Icon"
        />
      </div>
      <div>
        {isOpen &&
          sideNav.map((section, index: number) => (
            <SlideDownNav key={index} section={section} />
          ))}
      </div>
      <div>
        {isOpen && (
          <>
            <hr className="mt-6" />
            <div className="flex items-center justify-between px-20 py-4 bg-lightGray">
              <div className="font-light">More Ways to Learn</div>
            </div>
            {globalNav
              .filter(navItem => templateId != navItem)
              .map((navItem, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between px-20 py-4 bg-lightGray"
                  >
                    <div className="font-medium">{navItem}</div>
                    <img
                      className="transform -rotate-90"
                      src={arrowIcon}
                      alt="Substrate Documentation Icon"
                    />
                  </div>
                )
              })}
          </>
        )}
      </div>
    </nav>
  )
}