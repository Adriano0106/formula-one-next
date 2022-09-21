a = await fetch("http://ergast.com/api/f1/2022/drivers.json")
a = await a.json();
a && a.MRData ? console.log(a.MRData.DriverTable.Drivers) : console.error('No data found')
