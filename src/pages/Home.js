import React from 'react'
import { Button } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { Label, Select } from 'flowbite-react';
const Home = () => {
  return (
    <div className="flex justify-start h-screen flex-col items-center">
    
    <div className="text-3xl md:text-5xl  mt-[5%] ">Welcome to <span className='text-blue-400'>Vedic Bihar</span>  </div>
    {/* <Button className='mt-3'>Click me</Button> */}
   

    <div className="w-[400px] mt-20">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your University" />
      </div>
      <Select id="countries" required>
        <option>Tilka Manjhi Bhagalpur University</option>
        <option>Veer Kunwar Singh University</option>
        <option>Rajendra Agricultural University"</option>
        <option>Patna University</option>
        <option value="">Maulana Mazharul Haque Arabic and Persian University</option>
        <option value="">Magadh University</option>
        <option value="">Lalit Narayan Mithila University</option>
        <option value="">Jai Prakash Vishwavidyalaya</option>
      </Select>
      <div className="w-[400px] mt-5">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your University" />
      </div>
      <Select id="colleges" required>
  <option>T.N.B. College, Bhagalpur</option>
  <option>S.P. Jain College, Bhagalpur</option>
  <option>Marwari College, Bhagalpur</option>
  <option>J.P. College, Narayanpur</option>
  <option>Murarka College, Sultanganj</option>
  <option>S.S. Vidyapeeth, Deoghar</option>
  <option>P.B.S. College, Banka</option>
  <option>Bhagalpur National College, Bhagalpur</option>
  <option>T.N.B. Law College, Bhagalpur</option>
  <option>Sabour College, Sabour</option>
  <option>G.B. College, Naugachia</option>
  <option>Jamalpur College, Jamalpur</option>
  <option>B.N.M. College, Barhiya</option>
  <option>B.N.S. College, Barhiya</option>
  <option>K.D. College, Gogri</option>
  <option>M.S. College, Barhariya</option>
  <option>B.N.M. College, Bhagalpur</option>
  <option>B.N.S. College, Bhagalpur</option>
  <option>Koshi College, Khagaria</option>
  <option>S.M. College, Bhagalpur</option>
  <option>G.B. College, Gopalpur</option>
  <option>R.N.B. College, Navgachhia</option>
  <option>S.K. Raj College, Katihar</option>
  <option>R.D. & D.J. College, Munger</option>
  <option>T.N.B. Commerce College, Bhagalpur</option>
  <option>Madan Ahilya Mahila College, Naugachia</option>
  <option>S.S.V. College, Kahalgaon</option>
  <option>B.L.S.G. College, Maheshpur</option>
  <option>J.M.S. College, Munger</option>
  <option>B.N.S. Mahila College, Madhepura</option>
</Select>
</div>
    </div>
    
        </div>
  )
}

export default Home