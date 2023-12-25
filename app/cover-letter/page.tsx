"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CoverLetter = () => {
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [companys, setCompanys] = useState<string>("");
  const [compilation, setCompilation] = useState<boolean>(false);

  const generateCoverLetterText = () => {
    return `%5Cdocumentclass%5B11pt%2Ca4%5D%7Barticle%7D%0A%5Cusepackage%7Blatexsym%7D%0A%5Cusepackage%5Bempty%5D%7Bfullpage%7D%0A%5Cusepackage%7Btitlesec%7D%5Cusepackage%7Bxspace%7D%0A%20%5Cusepackage%7Bmarvosym%7D%0A%5Cusepackage%5Busenames%2Cdvipsnames%5D%7Bcolor%7D%0A%5Cusepackage%7Bverbatim%7D%0A%5Cusepackage%5Bhidelinks%5D%7Bhyperref%7D%0A%5Cusepackage%7Bfancyhdr%7D%0A%5Cusepackage%7Bmulticol%7D%0A%5Cusepackage%7Bhyperref%7D%0A%5Cusepackage%7Bcsquotes%7D%0A%5Cusepackage%7Btabularx%7D%0A%5Chypersetup%7Bcolorlinks%3Dtrue%2Curlcolor%3Dblack%7D%0A%5Cusepackage%5B11pt%5D%7Bmoresize%7D%0A%5Cusepackage%7Bsetspace%7D%0A%25%20%5Cusepackage%7Bfontspec%7D%0A%5Cusepackage%5Binline%5D%7Benumitem%7D%0A%5Cusepackage%7Bragged2e%7D%0A%5Cusepackage%7Banyfontsize%7D%0A%5Cusepackage%5Bmargin%3D1cm%5D%7Bgeometry%7D%0A%25%20%5Csetmainfont%5B%0A%25%20BoldFont%3DSourceSansPro-Semibold.otf%2C%0A%25%20ItalicFont%3DSourceSansPro-RegularIt.otf%0A%25%20%5D%7BSourceSansPro-Regular.otf%7D%0A%5Cpagestyle%7Bfancy%7D%0A%5Cfancyhf%7B%7D%20%0A%5Cfancyfoot%7B%7D%0A%5Crenewcommand%7B%5Cheadrulewidth%7D%7B0pt%7D%0A%5Crenewcommand%7B%5Cfootrulewidth%7D%7B0pt%7D%0A%5Curlstyle%7Bsame%7D%0A%5Craggedbottom%0A%5Craggedright%0A%5Csetlength%7B%5Ctabcolsep%7D%7B0in%7D%0A%5Cdefinecolor%7BUI_blue%7D%7BRGB%7D%7B32%2C%2064%2C%20151%7D%0A%5Cdefinecolor%7BHF_color%7D%7BRGB%7D%7B179%2C%20179%2C%20179%7D%0A%5Crfoot%7B%7B%5Ccolor%7BHF_color%7D%20%5Cthepage%20%5C%20of%20%5C%201%2C%20Updated%20%5Ctoday%7D%7D%0A%5Ctitleformat%7B%5Csection%7D%7B%0A%5Ccolor%7BUI_blue%7D%20%5Cscshape%20%5Craggedright%20%5Clarge%20%0A%7D%7B%7D%7B0em%7D%7B%7D%5B%5Cvspace%7B-0.7cm%7D%20%5Chrulefill%20%5Cvspace%7B-0.2cm%7D%5D%0A%0A%5Cbegin%7Bdocument%7D%0A%0A%5Cbegin%7Bcenter%7D%0A%20%20%20%20%5Cbegin%7Bminipage%7D%5Bb%5D%7B0.24%5Ctextwidth%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Clarge%20%2B91-8725059504%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Clarge%20%5Chref%7Bmailto%3Ayouremail%40email.com%7D%7Bgargshaurya28%40gmail.com%7D%20%0A%20%20%20%20%5Cend%7Bminipage%7D%25%20%0A%20%20%20%20%5Cbegin%7Bminipage%7D%5Bb%5D%7B0.5%5Ctextwidth%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Ccentering%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%5CHuge%20Shaurya%20Garg%7D%20%5C%5C%20%25%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Cvspace%7B0.1cm%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Ccolor%7BUI_blue%7D%20%5CLarge%7BSoftware%20Developer%7D%7D%20%5C%5C%0A%20%20%20%20%5Cend%7Bminipage%7D%25%20%0A%20%20%20%20%5Cbegin%7Bminipage%7D%5Bb%5D%7B0.24%5Ctextwidth%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Cflushright%20%5Clarge%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Chref%7Bhttps%3A%2F%2Fwww.linkedin.com%2Fin%2Fshaurya-garg-988675202%2F%7D%7BLinkedIn%7D%20%7D%20%5C%5C%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Chref%7Bhttps%3A%2F%2Fportfolio-nextjs-shaurya5.vercel.app%2F%7D%7BPortfolio%7D%0A%20%20%20%20%5Cend%7Bminipage%7D%20%20%20%0A%20%20%20%20%0A%5Cvspace%7B-0.15cm%7D%20%0A%7B%5Ccolor%7BUI_blue%7D%20%5Chrulefill%7D%0A%5Cend%7Bcenter%7D%0A%0A%5Cjustify%0A%5Csetlength%7B%5Cparindent%7D%7B0pt%7D%0A%5Csetlength%7B%5Cparskip%7D%7B12pt%7D%0A%5Cvspace%7B0.2cm%7D%0A%5Cbegin%7Bcenter%7D%0A%20%20%20%20%7B%5Ccolor%7BUI_blue%7D%20%5CLarge%7BCOVER%20LETTER%7D%7D%0A%5Cend%7Bcenter%7D%0A%0A%5Cdef%20%5Ccompany%20%7B${company}%7D%20%0A%5Cdef%20%5Ccompanys%20%7B${companys}%5Cxspace%7D%20%0A%5Cdef%20%5Crole%20%7B${role}%5Cxspace%7D%20%0A%0A%0A%25%20Date%3A%20%5Ctoday%20%5Cpar%20%5Cvspace%7B-0.1cm%7D%0ADear%20Hiring%20Manager%2C%20%25%20OR%20To%20whom%20this%20may%20concern%2C%20%0A%0AI%20am%20writing%20to%20express%20my%20keen%20interest%20in%20the%20%5Crole%20role%20at%20%5Ccompany%20%2C%20as%20advertised%20on%20your%20website.%20As%20a%20senior%20student%20majoring%20in%20Electronics%20and%20Instrumentation%20with%20a%20minor%20in%20Computing%20and%20Intelligence%20at%20BITS%20Pilani%20Hyderabad%20Campus%2C%20I%20am%20eager%20to%20utilize%20my%20technical%20skills%20and%20passion%20for%20software%20development%20to%20contribute%20to%20%5Ccompanys%20innovative%20projects.%20%5Cpar%0A%0AMy%20academic%20journey%20at%20BITS%20Pilani%20has%20equipped%20me%20with%20a%20solid%20foundation%20in%20electronics%2C%20instrumentation%2C%20and%20computing%2C%20aligning%20well%20with%20the%20requirements%20of%20a%20software%20developer%20role.%20Despite%20my%20electronics%20major%2C%20I%20have%20consistently%20pursued%20opportunities%20to%20deepen%20my%20programming%20knowledge%2C%20inside%20and%20outside%20the%20classroom.%20%5Cpar%0A%0AI%20have%20gained%20proficiency%20in%20programming%20languages%20such%20as%20Java%2C%20C%2B%2B%2C%20and%20JavaScript%2C%20and%20experience%20in%20web%20development%2C%20database%20management%2C%20and%20software%20engineering%20principles.%20My%20coursework%20and%20projects%20have%20honed%20my%20problem-solving%20abilities%2C%20allowing%20me%20to%20analyze%20complex%20issues%20and%20implement%20efficient%20solutions.%20%5Cpar%0A%0AIn%20addition%20to%20my%20technical%20skills%2C%20I%20actively%20participated%20in%20group%20projects%20and%20extracurricular%20activities%2C%20honing%20strong%20teamwork%20and%20communication%20skills%20crucial%20for%20collaborative%20software%20development.%20I%20am%20committed%20to%20continuous%20learning%2C%20and%20staying%20updated%20with%20the%20latest%20technological%20advancements%20and%20software%20engineering%20practices.%20%5Ccompanys%20commitment%20to%20innovation%20and%20reputation%20for%20delivering%20exceptional%20client%20service%20excites%20me.%20I%20am%20eager%20to%20contribute%20to%20a%20team%20that%20embraces%20new%20technologies%20and%20creative%20solutions%20while%20fostering%20a%20diverse%20and%20inclusive%20workplace%20culture.%5Cpar%0A%0AThank%20you%20for%20considering%20my%20application.%20I%20would%20welcome%20the%20opportunity%20to%20further%20discuss%20how%20my%20background%20and%20skills%20can%20contribute%20to%20%5Ccompanys%20success.%20Please%20find%20my%20resume%20attached%20for%20your%20reference.%20I%20look%20forward%20to%20the%20possibility%20of%20interviewing%20with%20your%20team%20and%20exploring%20how%20I%20can%20support%20%5Ccompanys%20software%20development%20initiatives.%0A%0A%0A%5Cvspace%7B0.5cm%7D%0A%5Craggedright%0ASincerely%2C%20%5C%5C%20Shaurya%20Garg%20%0A%0A%5Cend%7Bdocument%7D`
  }

  let cover_letter_text = generateCoverLetterText();

  const handleClick = () => {
    if (company.endsWith("s")) setCompanys(company + "'");
    else setCompanys(company + "'s");
    setCompilation(true);
  };

  useEffect(() => {
    cover_letter_text = generateCoverLetterText();
  }, [company, role, companys, compilation])

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="my-[4rem] text-4xl">Edit your Cover Letter</h1>
      <div className="flex flex-col w-[20rem] gap-2">
        <label htmlFor="company">Company Name</label>
        <input
          name="company"
          className="text-black p-2"
          onChange={(e) => setCompany(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <input
          name="role"
          className="text-black p-2"
          onChange={(e) => setRole(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleClick}
        >
          Compile PDF
        </button>
        {compilation && (
          <Link
            href={`https://latexonline.cc/compile?text=${cover_letter_text}`}
          >
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Open PDF
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CoverLetter;
