import { FaShare } from 'react-icons/fa'
import './App.css'
import { CiBookmark } from 'react-icons/ci'

// alt + shift + o => remove unwanted imports 
function App() {


  return (
    <>
      {/* <img src="https://assets-cdn.ekantipur.com/uploads/source/ads/1440x233-3-14112026055745.jpg" alt="banner" />
      <nav className='flex py-6 justify-around border border-gray-400 shadow-xl'>
        <ul className='flex gap-4 items-center'>
          <li><img src="https://ekantipur.com/assets/images/kantipur-logo.svg" alt="logo" width="100px" /></li>
          <li>समाचार</li>
        </ul>
        <button><a href="">Sign In</a></button>
      </nav>

      <main>
        <section className='flex justify-center'>
          <div className='w-[575px] text-center'>
            <h1 className='text-[44px] font-bold'>आईजीपी विवादमा बहस : कार्कीका कानुन व्यवसायीले मागिरहे अन्तरिम, अदालतले दियो कारण देखाउ आदेश </h1>
            <p>बुधबार भएको सुनुवाइपछि न्यायाधीश श्रीकान्त पौडेलको एकल इजलासले दुवै पक्षलाई छलफलमा बोलाउन आदेश गरेको हो ।</p>
            <img width={700} src="https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2026/third-party/igp-karki-06112026081314-1000x01-18112026104534-1000x0.png" alt="police" />

            <div className='flex items-center justify-between my-6 border border-gray-600 p-2'>
              <button className='border border-gray-600 py-2 px-4 rounded'>Read In English</button>

              <ul className='flex gap-4'>
                <li className='bg-gray-300 flex justify-around items-center h-[50px] w-[50px] rounded-full'><FaShare /></li>
                <li className='bg-gray-300 flex justify-around items-center h-[50px] w-[50px] rounded-full'>Aa</li>
                <li className='bg-gray-300 flex justify-around items-center h-[50px] w-[50px] rounded-full'><CiBookmark /></li>
              </ul>

            </div>

          </div>

        </section>




      </main> */}


      <div className='m-4 sm:m-10 md:m-[100px] lg:m-[200px]'>

        <aside></aside>

        {/* <section className='flex justify-center gap-2 flex-wrap'> */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-green-600 md:bg-yellow-600 lg:bg-red-600  '>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
          <article className='border border-gray-400 rounded-xl p-4'>
            <img src="https://image.made-in-china.com/202f0j00CQSokNRGAKqi/Hot-Selling-Gradient-Screen-Printed-T-Shirts-Custom-Short-Sleeve-Sustainable-T-Shirt.webp" width={300} alt="product_img" />
            <p className='font-bold'>Gradient Graphics Tshirt</p>
            <span>4.5/5</span>
            <h2 className='font-bold text-xl'>$225</h2>
          </article>
        </section>

      </div>



    </>
  )
}

export default App
