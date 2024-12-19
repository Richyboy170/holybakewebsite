import React from 'react';
import "@/app/globals.css"; // Import global styles

const HistoryPage = () => {
  return (
    <main style={{ fontFamily: 'Thai' }} className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">เรื่องราวของเรา</h1>
        <section className="space-y-10">
          {/* Year 2014 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2014</h2>
            <p className="text-gray-600">จุดเริ่มต้นของ &quotครองแครงไฮโซ&quot</p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>

          {/* Year 2016 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2016</h2>
            <p className="text-gray-600">
              ศึกษาและพัฒนาอย่างจริงจัง โดยร่วมกับสถาบันค้นคว้าและพัฒนาผลิตภัณฑ์อาหาร 
              มหาวิทยาลัยเกษตรศาสตร์ ซึ่งได้รับเกียรติจาก รศ.ดร.วิเชียร ลีลาวัชรมาศ 
              อาจารย์ภาควิชาเทคโนโลยีชีวภาพ คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์ 
              ให้เกียรติเป็นที่ปรึกษา
            </p>
            <p className="text-gray-600">
              และในปีเดียวกัน &quotครองแครงไฮโซ&quot ได้จดลิขสิทธิ์กับกรมทรัพย์สินทางปัญญา 
              เจ้าแรก เจ้าเดียวที่ทำครองแครงกรอบด้วยนวัตกรรมอบรีดน้ำมันทิ้งให้หมด 
              ไม่เหลือหลอ ทำให้ได้ครองแครงที่กรอบอร่อยไร้น้ำมัน เก็บได้นานถึง 6 เดือน 😊
            </p>
            <p className="text-gray-600">
              ด้วยการตั้งใจพัฒนาอย่างไม่หยุดยั้งจนได้วางจำหน่ายในร้านอาหาร ขนมเพื่อสุขภาพหลายสาขา 
              เช่น Green corner shop ร้านอาหาร ขนม เครื่องดื่มเพื่อคนรักสุขภาพ/คลีน, Cafe Amezon เป็นต้น
            </p>
            <p className="text-gray-600">
              ผลิตภัณฑ์ได้รับความสนใจจากลูกค้าและสื่อมวลชน ได้รับเชิญให้สัมภาษณ์ในรายการ 
              &quotประตูสู่เศรษฐี&quot ทางช่อง PPTV HD36 และอีกหลายรายการ
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>

          {/* Year 2017 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2017</h2>
            <p className="text-gray-600">
              ได้รับเชิญจากนิตยสาร Gourmet & Cuisine ให้เข้าร่วมพูดคุยและสัมภาษณ์ 
              ถึงแรงบันดาลใจในการทำธุรกิจ ในงาน Money Expo Financial Innovation 4.0 
              ณ IMPACT Arena, Exhibition and Convention Center, Muang Thong Thani
            </p>
            <p className="text-gray-600">
              ได้รับเชิญให้สัมภาษณ์ลงนิตยสารชั้นนำทั้งในและต่างประเทศ เช่น นิตยสาร TAMAGO, 
              นิตยสาร @Kitchen และนิตยสาร Gourmet & Cuisine
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>

          {/* Year 2020 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2020</h2>
            <p className="text-gray-600">
              ได้รับคัดเลือกจากกรมส่งเสริมอุตสาหกรรม กระทรวงอุตสาหกรรม 
              เข้าร่วมโครงการฝึกอบรมหลักสูตร &quotเสริมสร้างผู้ประกอบการใหม่ (New Entrepreneur Creation : NEC)&quot 
              เพื่อพัฒนาผู้ประกอบการใหม่ ให้สามารถก่อตั้งกิจการได้สำเร็จและดำเนินธุรกิจได้อย่างต่อเนื่อง
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>

          {/* Year 2021 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2021</h2>
            <p className="text-gray-600">
              ได้รับคัดเลือกจากกรมส่งเสริมอุตสาหกรรม กระทรวงอุตสาหกรรม 
              เข้าร่วมโครงการฝึกอบรมหลักสูตร &quotยกระดับศักยภาพผู้ประกอบการในการเข้าถึงแหล่งทุน&quot
            </p>
            <p className="text-gray-600">
              เริ่มเปิดรับตัวแทนจำหน่าย จนมีตัวแทนกว่า 30 สาขาทั่วกรุงเทพและต่างจังหวัด 
              ด้วยการันตียอดขายกว่า 30,000 ชิ้น
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>

          {/* Year 2024 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">ปี ค.ศ 2024</h2>
            <p className="text-gray-600">
              ได้จดทะเบียนอาหารกับสำนักงานคณะกรรมการอาหารและยา (FDA) 
              เป็นสัญลักษณ์ยืนยันถึงคุณภาพและความปลอดภัยของผลิตภัณฑ์
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>
        </section>
        <footer className="mt-10 text-center text-gray-600">
          <p>
          &quotHolyBake&quot ตั้งใจพัฒนาผลิตภัณฑ์ใหม่ๆ เพื่อส่งเสริมสุขภาพที่ดีอย่างแท้จริง
          </p>
          <p className="mt-4 font-bold text-gray-800">#คิดถึงขนมเพื่อสุขภาพคิดถึงเรา #HolyBake</p>
        </footer>
      </div>
    </main>
  );
};

export default HistoryPage;
