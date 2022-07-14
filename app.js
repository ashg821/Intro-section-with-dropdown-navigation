function handlingNavBarEvents() {
    let showDropdown1 = 0, showDropdown2 = 0;
    const dropdownLinks = document.querySelectorAll('.dropdownLink');
    const dropdowns = document.querySelectorAll('.dropdown');
    const featureDown = document.getElementById('featureDown');
    const featureUp = document.getElementById('featureUp');
    const companyDown = document.getElementById('companyDown');
    const companyUp = document.getElementById('companyUp');

    featureUp.style.display = 'none';
    companyUp.style.display = 'none';

    dropdownLinks.forEach((ele, index) => {
        ele.addEventListener('click', () => {
            if (index == 0) {
                if (showDropdown1 == 1) {
                    dropdowns[index].style.display = 'none';
                    showDropdown1 = 0;
                    featureDown.style.display = 'inline';
                    featureUp.style.display = 'none';
                }
                else {
                    dropdowns[index].style.display = 'block';
                    showDropdown1 = 1;
                    featureDown.style.display = 'none';
                    featureUp.style.display = 'inline';

                }
                if (showDropdown2 == 1) {
                    dropdowns[index + 1].style.display = 'none';
                    showDropdown2 = 0;
                    companyDown.style.display = 'inline';
                    companyUp.style.display = 'none';
                }
            }
            else {
                if (showDropdown2 == 1) {
                    dropdowns[index].style.display = 'none';
                    showDropdown2 = 0;
                    companyDown.style.display = 'inline';
                    companyUp.style.display = 'none';
                }
                else {
                    dropdowns[index].style.display = 'block';
                    showDropdown2 = 1;
                    companyDown.style.display = 'none';
                    companyUp.style.display = 'inline';

                }
                if (showDropdown1 == 1) {
                    dropdowns[index - 1].style.display = 'none';
                    showDropdown1 = 0;
                    featureDown.style.display = 'inline';
                    featureUp.style.display = 'none';
                }
            }
        });
    });
    const toggleIcon = document.getElementById('toggleIcon');
    const sideNav = document.getElementById('sideNav');
    const filterDiv = document.getElementById('filterDiv');
    toggleIcon.addEventListener('click', () => {
        sideNav.style.display = 'block';
        filterDiv.style.display = 'block';
        sideNav.innerHTML = `
        <div id="iconParent">
      <img src="./images/icon-close-menu.svg" alt="close menu icon" id="closeIcon">
    </div>
    <ul id="navList2">
      <li class="dropdownLink2"><a href="#">Features <i class="fa-solid fa-angle-down" id="featureDown2"
            style="margin-left: 8px;"></i><i class="fa-solid fa-angle-up" id="featureUp2"
            style="margin-left: 8px;"></i></a></li>
      <div class="dropdown2" id="dropdownB-1">
        <ul>
          <li><img src="./images/icon-todo.svg" style="margin: 0 5px;"><a href="#">Todo List</a></li>
          <li><img src="./images/icon-calendar.svg" style="margin: 0 5px;"><a href="#">Calender</a></li>
          <li><img src="./images/icon-reminders.svg" style="margin: 0 5px;"><a href="#">Reminder</a></li>
          <li><img src="./images/icon-planning.svg" style="margin: 0 5px;"><a href="#">Planning</a></li>
        </ul>
      </div>
      <li class="dropdownLink2"><a href="#">Company <i class="fa-solid fa-angle-down" id="companyDown2"
            style="margin-left: 8px;"></i><i class="fa-solid fa-angle-up" id="companyUp2"
            style="margin-left: 8px;"></i></a></li>
      <div class="dropdown2" id="dropdownB-2">
        <ul>
          <li><a href="#">History</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <li><a href="#">Careers</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <div id="navContainerB-2">
      <a href="#">Login</a>
      <a href="#" id="navRegister2">Register</a>
    </div>`

        const dropdownLinks2 = document.querySelectorAll('.dropdownLink2');
        const dropdowns2 = document.querySelectorAll('.dropdown2');
        const featureDown2 = document.getElementById('featureDown2');
        const featureUp2 = document.getElementById('featureUp2');
        const companyDown2 = document.getElementById('companyDown2');
        const companyUp2 = document.getElementById('companyUp2');

        featureUp2.style.display = 'none';
        companyUp2.style.display = 'none';

        let showDropdownB1 = 0, showDropdownB2 = 0;

        dropdownLinks2.forEach((ele, index) => {
            ele.addEventListener('click', () => {
                if (index == 0) {
                    if (showDropdownB1 == 1) {
                        dropdowns2[index].style.display = 'none';
                        showDropdownB1 = 0;
                        featureDown2.style.display = 'inline';
                        featureUp2.style.display = 'none';
                    }
                    else {
                        dropdowns2[index].style.display = 'block';
                        showDropdownB1 = 1;
                        featureDown2.style.display = 'none';
                        featureUp2.style.display = 'inline';

                    }
                }
                else {
                    if (showDropdownB2 == 1) {
                        dropdowns2[index].style.display = 'none';
                        showDropdownB2 = 0;
                        companyDown2.style.display = 'inline';
                        companyUp2.style.display = 'none';
                    }
                    else {
                        dropdowns2[index].style.display = 'block';
                        showDropdownB2 = 1;
                        companyDown2.style.display = 'none';
                        companyUp2.style.display = 'inline';

                    }
                }
            });
        });
        const closeIcon = document.getElementById('closeIcon');
        closeIcon.addEventListener('click', () => {
            sideNav.style.display = 'none';
            filterDiv.style.display = 'none';
        })
    });
}

handlingNavBarEvents();



