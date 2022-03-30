import React from 'react';
import { DownloadOutlined  } from "@ant-design/icons";
import CV from '../../../assets/pdf/portfolio6.jpg';

const CTA = () => {
  return (
    <div>
      <a href={CV} download className="btn"><DownloadOutlined /> Download Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
          {/* <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download Resume</Button>
          <Button type="primary" shape="round">Let's Talk</Button> */}
    </div>
  )
}

export default CTA