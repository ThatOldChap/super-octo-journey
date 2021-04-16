// Get the title Element on the page
// titleElem = document.getElementsByTagName("head")[0].getElementsByTagName("title")[0]
// currentTitle = document.title

// Find the element that has the item number
/* 
    Url List:
        Item:           http://plm.mdsaero.com/Omnify7/Apps/Desktop/Item/Object.aspx?id=23361
        ECO:            http://plm.mdsaero.com/Omnify7/Apps/Desktop/Change/Object.aspx?id=3375
        Vendor:         http://plm.mdsaero.com/Omnify7/Apps/Desktop/Vendor/Object.aspx?id=102 
        Vendor Item:    http://plm.mdsaero.com/Omnify7/Apps/Desktop/VendorItem/Object.aspx?id=16515
        CAPA:           http://plm.mdsaero.com/Omnify7/Apps/Desktop/Quality/Object.aspx?id=433  
        Project:        http://plm.mdsaero.com/Omnify7/Apps/Desktop/Project/Object.aspx?id=61
        Service Object: http://plm.mdsaero.com/Omnify7/Apps/Desktop/Service/Object.aspx?id=416
        Desktop:        http://plm.mdsaero.com/Omnify7/Apps/Desktop/Default.aspx   
*/
let newTitle;
let prevTitle = "";

$(document).ready(function() {

    // Get the url of the webpage
    let url = document.URL;
    console.log(`url = ${url}`);

    // Get the type of object the page is currently on
    let objectType = url.split("/")[6];
    console.log(`objectType = ${objectType}`);    

    // Get the title text and assign it to the Webpage's title
    let newTitleID = "";
    console.log(`Case = ${objectType}`);
    switch (objectType) {
        case 'Item':
            newTitleID = '#frmSubTitleMenu_lblMainMenu_Text';       
            break;
    
        default:
            console.log('On the Desktop HomePage');
            newTitleID = '#lblMainHeader_Title';
            break;
    }

    newTitle = $(newTitleID)[0].innerText;
    console.log(`newTitle = ${newTitle}`);
    document.title = newTitle;

  /*   let ob = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.type === 'childList')
        })
    }); */

    let observer = new MutationObserver(updateTitle);
        
    function updateTitle (mutation) {
        /* for (let mutation of mutations) {
            console.log(mutation);
            newTitle = $(newTitleID)[0].innerText;
            console.log(`newTitle = ${newTitle}`);
            document.title = newTitle;

        } */
        console.log(mutation);
        newTitle = $(newTitleID)[0].innerText;
        console.log(`newTitle = ${newTitle} and prevTitle = ${prevTitle}`);

        if ($('head > title')[0].innerText != prevTitle) {
            document.title = newTitle;
            prevTitle = newTitle;
        }        
    }

    observerOptions = {
        childList: true
    };
    observer.observe($('head > title')[0], observerOptions);

    // Checks every time the Webpage title's changes
    $('title').change(function() {
        console.log(`innerText = ${$('#frmSubTitleMenu_lblMainMenu_Text')[0].innerText}`);
        console.log(`innerText = ${$('#frmSubTitleMenu_lblMainMenu_Text')[0].baseURI}`);


    });
});  


// titleElem = document.getElementsByTagName("head")[0].getElementsByTagName("title")[0]

/* newTitle = switch () {
    case value:
        
        break;

    default:
        break;
} */