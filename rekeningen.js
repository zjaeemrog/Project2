function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const dashboardContent = document.querySelector('.container-dash');
    setTimeout(() => {
        dashboardContent.classList.add('visible'); 
    }, 300); 

    const createCheckingAccountBtn = document.getElementById("create-checking-account-btn");
    const createSavingsAccountBtn = document.getElementById("create-savings-account-btn");
    
    const checkingAccountFormContainer = document.getElementById("account-form-container");
    const savingsAccountFormContainer = document.getElementById("account-form-container-2");

    function hideAllForms() {
        checkingAccountFormContainer.style.display = "none";
        savingsAccountFormContainer.style.display = "none";
    }

    createCheckingAccountBtn.addEventListener("click", function() {
        if (checkingAccountFormContainer.style.display === "block") {
            checkingAccountFormContainer.style.display = "none"; 
        } else {
            hideAllForms(); 
            checkingAccountFormContainer.style.display = "block"; 
        }
    });

    createSavingsAccountBtn.addEventListener("click", function() {
        if (savingsAccountFormContainer.style.display === "block") {
            savingsAccountFormContainer.style.display = "none"; 
        } else {
            hideAllForms(); 
            savingsAccountFormContainer.style.display = "block";
        }
    });

    document.getElementById("account-form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const accountHolder = document.getElementById("account-holder").value;
        const accountType = document.getElementById("account-type").value;
        const initialBalance = parseFloat(document.getElementById("initial-balance").value);

        if (!accountHolder || isNaN(initialBalance) || initialBalance < 0) {
            alert("Vul alle velden correct in.");
            return;
        }
        const newAccount = document.createElement('div');
        newAccount.classList.add('account');
        newAccount.innerHTML = `
            <h3>${accountType === 'checking' ? 'Betaalrekening' : 'Spaarrekening'}</h3>
            <p>Saldo: € ${initialBalance.toFixed(2)}</p>
        `;
        document.getElementById('new-accounts-checking').appendChild(newAccount);

        hideAllForms(); 

        document.getElementById("account-form").reset();
    });

    document.getElementById("account-form-2").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const accountHolder = document.getElementById("account-holder-2").value;
        const accountType = document.getElementById("account-type-2").value;
        const initialBalance = parseFloat(document.getElementById("initial-balance-2").value);

        if (!accountHolder || isNaN(initialBalance) || initialBalance < 0) {
            alert("Vul alle velden correct in.");
            return;
        }

        const newAccount = document.createElement('div');
        newAccount.classList.add('account');
        newAccount.innerHTML = `
            <h3>${accountType === 'savings' ? 'Spaarrekening' : 'Betaalrekening'}</h3>
            <p>Saldo: € ${initialBalance.toFixed(2)}</p>
        `;
        document.getElementById('new-accounts-savings').appendChild(newAccount);

        hideAllForms(); 

        document.getElementById("account-form-2").reset();
    });
});
