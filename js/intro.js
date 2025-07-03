const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.zip'; // 파일 경로
    link.download = 'resume.zip'; // 저장될 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  