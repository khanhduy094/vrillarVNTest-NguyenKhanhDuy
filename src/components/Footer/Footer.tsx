export default function Footer() {
  return (
    <div className='footer bg-[#15151e] py-5'>
      <div className='container mx-auto max-w-[1050px] text-white'>
        <div className='footer-top flex items-center justify-center py-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={80}
            height={20}
            viewBox='0 0 80 20'
            fill='none'
            className='injected-svg js-svg-inject'
          >
            <g clipPath='url(#clip0_1_38-2)'>
              <g clipPath='url(#clip1_1_38-2)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.9917 6.01667L0 20H11.275L20.5208 10.8125C23.9875 7.375 25.8 6.81667 32.8333 6.81667H58.6542L65.6083 0H31.3375C21.8 0 19.0583 0.954167 13.9917 6.01667ZM21.9583 12.1958C25.1292 9.02917 26.4917 8.70833 33.525 8.70833H56.7375L49.7833 15.5792H32.7C29.2083 15.5792 28.5958 15.9542 27.1292 17.4708L24.65 20H14.2042L21.9583 12.1958ZM48.05 20L68.0625 0H80L59.9083 20H48.05ZM69.0709 19.0958C69.6667 19.7 70.4167 20 71.3167 20H71.3125C72.2125 20 72.9584 19.7 73.5417 19.1C74.1292 18.5 74.4209 17.7583 74.4209 16.8792C74.4209 16 74.1251 15.2583 73.5376 14.6542C72.9501 14.05 72.2042 13.75 71.3042 13.75C70.4042 13.75 69.6542 14.05 69.0626 14.65C68.4709 15.25 68.175 15.9917 68.175 16.8708C68.175 17.75 68.4751 18.4917 69.0709 19.0958ZM69.4459 15.0083C69.9417 14.4958 70.5625 14.2417 71.3 14.2417V14.2375C72.0376 14.2375 72.6542 14.4917 73.1542 15.0042C73.6501 15.5167 73.9001 16.1417 73.9001 16.8708C73.9001 17.6 73.6501 18.2208 73.1542 18.7292C72.6584 19.2375 72.0376 19.4917 71.3 19.4917C70.5625 19.4917 69.9459 19.2375 69.4459 18.725C68.9501 18.2167 68.7001 17.5958 68.7001 16.8667C68.7001 16.1375 68.9459 15.5208 69.4459 15.0083ZM70.6875 18.6167V17.3917H71.3876L71.9792 18.6167H72.7042L72.05 17.3C72.2709 17.2 72.425 17.0667 72.5167 16.9042C72.6084 16.7417 72.6542 16.4875 72.6542 16.1542C72.6542 15.8208 72.5417 15.5667 72.3167 15.4C72.0917 15.2333 71.7542 15.15 71.3042 15.15H70.0001V18.6167H70.6875ZM70.675 16.8542V15.6875H71.2417C71.7334 15.6875 71.9792 15.8833 71.9792 16.2708C71.9792 16.475 71.9334 16.625 71.8376 16.7167C71.7417 16.8083 71.5876 16.8542 71.3751 16.8542H70.675Z'
                  fill='#E10600'
                />
              </g>
            </g>
            <defs>
              <clipPath id='clip0_1_38-2'>
                <rect width={80} height={20} fill='white' />
              </clipPath>
              <clipPath id='clip1_1_38-2'>
                <rect width={80} height={20} fill='white' />
              </clipPath>
            </defs>
          </svg>
          <span className='ml-1 text-xl'>Our partners</span>
        </div>
        <div className='footer-bottom flex items-center justify-between border-t-[1.5px] border-solid border-[#38383f] py-2'>
          <div className='h-[50px] w-[80px] items-center justify-center md:flex'>
            <img src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg' alt='' />
          </div>
          <div className='text-xs'>© 2003-2023 Formula One World Championship Limited</div>
        </div>
      </div>
    </div>
  )
}
