function companyUsers(arr) {


    const companyEmployees = {};

    for (const employeesInfo of arr) {

        const [company, empId] = employeesInfo.split(" -> ");


        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(empId)) {
                companyEmployees[company].push(empId)
            }
        } else {
            companyEmployees[company] = [empId];
        }

    }

    const entries = Object.entries(companyEmployees);
    const sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [company, id] of sortedEntries) {
        console.log(company);
        for (const emplId of id) {
            console.log(`-- ${(emplId)}`);
            
        }


    }

}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);