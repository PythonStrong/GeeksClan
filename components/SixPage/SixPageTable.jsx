import React from 'react'

export default function SixPageTable() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-400 text-white'>
                            <th></th>
                            <th>Name</th>
                            <th>Adress</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Savannah Howard</td>
                            <td>1473 Ranchview Dr undefined San Jose</td>
                            <td>(209) 555-0104</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Morris Cooper</td>
                            <td>8445 Railroad St undefined Tampa</td>
                            <td>(201) 555-0124</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>Victoria Lane</td>
                            <td>8584 W Sherman Dr undefined Desoto</td>
                            <td>(505) 555-0125</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
