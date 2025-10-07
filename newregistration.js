 function showForm(role) {
      document.getElementById('teacher-form').classList.remove('active');
      document.getElementById('student-form').classList.remove('active');
      if(role === 'teacher') {
        setTimeout(() => {
          document.getElementById('teacher-form').classList.add('active');
        }, 120);
      } else if(role === 'student') {
        setTimeout(() => {
          document.getElementById('student-form').classList.add('active');
        }, 120);
      }
    }