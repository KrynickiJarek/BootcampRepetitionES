document.addEventListener("DOMContentLoaded", function () {

    const state = {
        invoiceSection: false,
        availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
        formStatus: "failed",
        isUserLogged: false
    };

    const stateCopy = {
        ...state,
        availableYears: state.availableYears.filter(e => e < 2000),
        isUserLogged: true
    }

    console.log(stateCopy);


});