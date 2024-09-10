import React from 'react';
import { IoMdPerson } from "react-icons/io";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDF from '../../assest/free-pdf-icon-2610-thumb.png'

const TABS = [
    { label: "All", value: "all" },
    { label: "Monitored", value: "monitored" },
    { label: "Unmonitored", value: "unmonitored" },
];

const TABLE_HEAD = ["No", "Data", "Event", "Comm In", "Comm Out", "Amount", "Info"];

const TABLE_ROWS = [
   { no: 1, data: "Sample Data 1", event: "Event A", commIn: "10", commOut: "5", amount: "100", info: "Info A" },
   { no: 2, data: "Sample Data 2", event: "Event B", commIn: "15", commOut: "8", amount: "150", info: "Info B" },
];

function UnsettelBet() {
  
  const downloadPDF = () => {
    const input = document.getElementById('tableContent'); // target the table

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('table.pdf');
    });
  };

  return (
    <div className="mx-1 w-full sm:w">
      <div className="flex space-x-1 items-center justify-between px-2 bg-custom-yellow-background py-1 w-full">
        <div className='flex items-center'>
          <IoMdPerson />
          <p>Account Statement</p>
        </div>
        <div>
          <p className='text-[13.6px] font-extrabold font-poppins'>
            Total P/L : IR <span className='text-green-700'>0</span> 
          </p>
        </div>
      </div>

      <div className='bg-white pt-3 pb-1 px-2'>
        <div className='max-w-[940px] w-full'>
          <div className='grid md:grid-cols-4 grid-cols-2 sm:gap-3 gap-1'>
            <div className='w-full'>
              <label htmlFor="from-date" className="block text-[11.9px] font-[400] font-poppins text-gray-700">From Date</label>
              <input type="date" id="from-date" className="w-full py-1 px-2 border rounded-md" />
            </div>
            <div className='w-full'>
              <label htmlFor="to-date" className="block text-[11.9px] font-[400] font-poppins text-gray-700">To Date</label>
              <input type="date" id="to-date" className="w-full py-1 px-2 border rounded-md" />
            </div>
            <div className='w-full'>
              <label htmlFor="sport" className="block text-[11.9px] font-[400] font-poppins text-gray-700">Sport</label>
              <select id="sport" className="w-full px-2 py-1 border rounded-md">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className='w-full flex space-x-2   items-center'>
              <button className="bg-[#00162D] mt-3 text-white text-[13px] font-[400] font-poppins rounded-md px-3 py-2 w-full">
                Submit
              </button>
              <img src={PDF}  alt='pdf'
            onClick={downloadPDF} 
            className="w-[70px] h-[50px] cursor-pointer " />
            </div>
           
          </div>
        </div>

        <div id="tableContent" className="overflow-x-auto mt-4">
          <table className="min-w-full whitespace-nowrap lg:w-full sm:overflow-scroll w-[300px] bg-white">
            <thead className="border">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="py-0 text-start px-2 text-black font-[500] text-[13px] border-r border-gray-300 last:border-r-0">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {TABLE_ROWS.length > 0 ? (
                TABLE_ROWS.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-gray-600 font-[500] text-[15px]">
                    <td className="py-0 px-2">{row.no}</td>
                    <td className="py-0 px-2">{row.data}</td>
                    <td className="py-0 px-2">{row.event}</td>
                    <td className="py-0 px-2">{row.commIn}</td>
                    <td className="py-0 px-2">{row.commOut}</td>
                    <td className="py-0 px-2">{row.amount}</td>
                    <td className="py-0 px-2">{row.info}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={TABLE_HEAD.length} className="text-center py-4">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="p-4 flex justify-between items-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">Page 1 of 10</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* PDF Download Button */}
        
      </div>
    </div>
  );
}

export default UnsettelBet;
