import { Layout } from "@components/common";
export default function Home() {
  return (
    <div className='w-full   bg-gray-100 border-8 rounded-lg p-12'>
      <div className='sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-x-2'>
        {/* First Grid */}
        <div className='sm:col-span-2 border border-r-1 rounded-lg p-4 '>
          <div>Digi Logo | min - max whatever it is</div>
          <div className='w-full h-64 bg-gradient-to-r from-blue-400 to-blue-500 border-4 border-slate-400 p-2'>
            {/* Top Section  */}
            <div>
              <div className='grid grid-cols-4'>
                <div>
                  <p className='text-xs'>TARE</p>
                  <p className='text-xl text-bold text-white'>0.000</p>
                </div>
                <div>
                  <p className='text-xs'>WEIGHT</p>
                  <p className='text-xl text-bold text-white'>0.000</p>
                </div>
                <div>
                  <p className='text-xs'>UNIT PRICE</p>
                  <p className='text-xl text-bold text-white'>0.000</p>
                </div>
                <div>
                  <p className='text-xs'>TOTAL PRICE</p>
                  <p className='text-xl text-bold text-white'>0.000</p>
                </div>
              </div>
            </div>
            {/* Middle Section */}

            <div className='grid grid-cols-3 gap-2 '>
              {/* Text and PLU number */}
              <div className='grid col-span-2 mt-2'>
                <input
                  type='text'
                  className='p-2 h-6 w-full flex-grow rounded-md focus:outline-none flex-shrink'
                ></input>
              </div>
              {/* Date and Now Serving */}
              <div className='-mt-2'>
                <p className='text-xs'>12.3.4.2022 </p>
                <input
                  type='text'
                  className='p-2 h-6 w-full flex-grow rounded-md focus:outline-none flex-shrink'
                ></input>{" "}
              </div>
            </div>
            {/* Most Used Section */}
            <div className='grid grid-cols-3 gap-2 '>
             
              <div className='grid col-span-2'>
               
              </div>

                <div className='grid grid-cols-2 text-xs h-28 gap-1 place-items-center text-center pt-2'>
                  <div className='bg-green-900 rounded-lg text-white w-full h-8'>
                    Small Tub
                  </div>
                  <div className=''>All PLU</div>
                  <div className='bg-green-900 rounded-lg text-white'>
                    Medium Tub
                  </div>
                  <div className=''>Large Tub</div>
                  <div className='bg-green-900 rounded-lg text-white'>
                    SEARCH
                  </div>
                  <div>Top 20 Items</div>
                  <div className='bg-green-900 rounded-lg text-white'>
                    Product Info
                  </div>
                  <div>Date/Time</div>
               
              </div>
            </div>
            {/* bottom Section */}
            <div>Bottom Section</div>
          </div>
        </div>

        {/* Second Grid */}
        <div className='border border-r-1 rounded-lg p-4'>
          <div className='grid grid-cols-4 grid-row-6 gap-1'>
            <div className='bg-black text-white w-full h-full text-center rounded-lg'>
              7
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              8
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              9
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              O
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              7
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              5
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              6
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              reverse
            </div>
            <div className='bg-black text-white w-full h-full text-center rounded-lg'>
              7
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              8
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              9
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              O
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              7
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              5
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              6
            </div>
            <div className='bg-black text-white  w-ful h-8 text-center rounded-lg'>
              reverse
            </div>
          </div>
        </div>

        {/* Last Grid */}
        <div className='col-span-3 border border-r-1 rounded-lg p-4 my-2'>
          <div className='grid grid-cols-12 grid-row-2 gap-2'>
            <div className='bg-white w-ful text-center border-2 rounded-lg'>
              <div className='relative top-0  bg-black text-white rounded-b-lg'>
                {" "}
                1{" "}
              </div>
            </div>
            <div className='bg-white w-ful text-center border-2 rounded-lg'>
              <div className='relative top-0  bg-black text-white rounded-b-lg'>
                {" "}
                2{" "}
              </div>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Home.layout = Layout;
