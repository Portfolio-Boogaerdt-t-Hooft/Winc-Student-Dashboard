import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"


const wincTheme = {
    area: {
        style: {
            data: {
                fill: "#212121"
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    axis: {
        style: {
            axis: {
                fill: "transparent",
                stroke: "#90A4AE",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            },
            axisLabel: {
                textAnchor: "middle",
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            grid: {
                fill: "none",
                stroke: "none"
            },
            ticks: {
                fill: "transparent",
                size: 5,
                stroke: "#90A4AE",
                strokeWidth: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            },
            tickLabels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    bar: {
        style: {
            data: {
                fill: "#4a90e2",
                padding: 0,
                strokeWidth: 0
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 8,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 20
    },
    boxplot: {
        style: {
            max: {
                padding: 8,
                stroke: "#455A64",
                strokeWidth: 1
            },
            maxLabels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            median: {
                padding: 8,
                stroke: "#455A64",
                strokeWidth: 1
            },
            medianLabels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            min: {
                padding: 8,
                stroke: "#455A64",
                strokeWidth: 1
            },
            minLabels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            q1: {
                padding: 8,
                fill: "#455A64"
            },
            q1Labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            q3: {
                padding: 8,
                fill: "#455A64"
            },
            q3Labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        boxWidth: 20,
        width: 350,
        height: 350,
        padding: 50
    },
    candlestick: {
        style: {
            data: {
                stroke: "#455A64"
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        candleColors: {
            positive: "#ffffff",
            negative: "#455A64"
        },
        width: 350,
        height: 350,
        padding: 50
    },
    chart: {
        width: 800,
        height: 300,
        padding: 50
    },
    errorbar: {
        borderWidth: 8,
        style: {
            data: {
                fill: "transparent",
                opacity: 1,
                stroke: "#455A64",
                strokeWidth: 2
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    group: {
        colorScale: [
            "#F4511E",
            "#FFF59D",
            "#DCE775",
            "#8BC34A",
            "#00796B",
            "#006064"
        ],
        width: 350,
        height: 350,
        padding: 50
    },
    legend: {
        colorScale: [
            "#F4511E",
            "#FFF59D",
            "#DCE775",
            "#8BC34A",
            "#00796B",
            "#006064"
        ],
        gutter: 10,
        orientation: "vertical",
        titleOrientation: "top",
        style: {
            data: {
                type: "circle"
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            },
            title: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 5,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        }
    },
    line: {
        style: {
            data: {
                fill: "transparent",
                opacity: 1,
                stroke: "#455A64",
                strokeWidth: 2
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    pie: {
        colorScale: [
            "#F4511E",
            "#FFF59D",
            "#DCE775",
            "#8BC34A",
            "#00796B",
            "#006064"
        ],
        style: {
            data: {
                padding: 8,
                stroke: "#ECEFF1",
                strokeWidth: 1
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 20,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    scatter: {
        style: {
            data: {
                fill: "#455A64",
                opacity: 1,
                stroke: "transparent",
                strokeWidth: 0
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 8,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    stack: {
        colorScale: [
            "#F4511E",
            "#FFF59D",
            "#DCE775",
            "#8BC34A",
            "#00796B",
            "#006064"
        ],
        width: 350,
        height: 350,
        padding: 50
    },
    tooltip: {
        style: {
            fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
            fontSize: 12,
            letterSpacing: "normal",
            padding: 5,
            fill: "#455A64",
            stroke: "transparent",
            strokeWidth: 0,
            pointerEvents: "none"
        },
        flyoutStyle: {
            stroke: "#212121",
            strokeWidth: 1,
            fill: "#f0f0f0",
            pointerEvents: "none"
        },
        cornerRadius: 5,
        pointerLength: 10
    },
    voronoi: {
        style: {
            data: {
                fill: "transparent",
                stroke: "transparent",
                strokeWidth: 0
            },
            labels: {
                fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                fontSize: 12,
                letterSpacing: "normal",
                padding: 5,
                fill: "#455A64",
                stroke: "transparent",
                strokeWidth: 0,
                pointerEvents: "none"
            },
            flyout: {
                stroke: "#212121",
                strokeWidth: 1,
                fill: "#f0f0f0",
                pointerEvents: "none"
            }
        },
        width: 350,
        height: 350,
        padding: 50
    }
};


let assignmentRatingAverage = [
    { assignment: "SCRUM" },
    { assignment: "W1D1-1" },
    { assignment: "W1D2-1" },
    { assignment: "W1D2-2" },
    { assignment: "W1D2-3" },
    { assignment: "W1D2-4" },
    { assignment: "W1D2-5" },
    { assignment: "W1D3-1" },
    { assignment: "W1D3-2" },
    { assignment: "W1D3-4" },
    { assignment: "W1D3-5" },
    { assignment: "W1D3 - Project - Guess the number" },
    { assignment: "W1D4-1" },
    { assignment: "W1D4 - Project - Kleurentoggle" },
    { assignment: "W1D5 - Project - Galgje" },
    { assignment: "W2D1-1" },
    { assignment: "W2D1-2" },
    { assignment: "W2D2-1" },
    { assignment: "W2D2-2" },
    { assignment: "W2D2-3" },
    { assignment: "W2D3-1" },
    { assignment: "W2D3-2" },
    { assignment: "W2D3-3" },
    { assignment: "W2D4-1" },
    { assignment: "W2D4-2" },
    { assignment: "W2D4-3" },
    { assignment: "W2D5 - Project - Filmzoeker" },
    { assignment: "W3D1-1" },
    { assignment: "W3D1-2" },
    { assignment: "W3D1-3" },
    { assignment: "W3D1-4" },
    { assignment: "W3D2-1" },
    { assignment: "W3D2-2" },
    { assignment: "W3D2-3" },
    { assignment: "W3D3-1" },
    { assignment: "W3D3-2" },
    { assignment: "W3D3-3" },
    { assignment: "W3D3-4" },
    { assignment: "W3D4-1" },
    { assignment: "W3D4-2" },
    { assignment: "W3D5 - Project - Todo-list" },
    { assignment: "W4D2-1" },
    { assignment: "W4D2-2" },
    { assignment: "W4D2-3" },
    { assignment: "W4D2-4" },
    { assignment: "W4D3-1" },
    { assignment: "W4D3-2" },
    { assignment: "W4D3-3" },
    { assignment: "W4D3-4" },
    { assignment: "W4D3-5" },
    { assignment: "W4D3 - Project - Next-level CSS" },
    { assignment: "W5D4-1" },
    { assignment: "W5D5 - Project - Lil_Playlist" },
    { assignment: "W6D1-1" },
    { assignment: "W6D2-1" },
    { assignment: "W6D2 - Project - Eindopdracht" },

];

// const difficultyRating = () => {

// }



function Bargraph(studentData) {
    const newStudentData = studentData.studentData.student;
    const assignmentData = newStudentData.map(x => x.assignments)
    const flattenArray = assignmentData.flat()
    const uniqueAssignmentNames = assignmentData[0].map(x => x.name)
    let sortedAssignments = [];
    uniqueAssignmentNames.forEach(assignment => {
        let groupedAssignments = flattenArray.filter(x => x.name === assignment)
        sortedAssignments.push(groupedAssignments)
    });
    let assignmentsTotal = [];
    sortedAssignments.forEach(assignmentSet => {
        const reducer = assignmentSet.reduce((total, current) => {
            return { name: current.name, difficultyRating: total.difficultyRating + current.difficultyRating, funRating: total.funRating + current.funRating }
        });
        assignmentsTotal.push(reducer)
    })
    const assignmentsAverage = assignmentsTotal.map((current) => {
        return { name: current.name, difficultyRating: (current.difficultyRating / newStudentData.length), funRating: (current.funRating / newStudentData.length) }
    });
    // console.log(assignmentsAverage)
    // bovenstaand heeft alle gemiddldes!!

    assignmentRatingAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));
    // console.log(assignmentRatingAverage)


    // // Add label
    const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating,
        label: `Opdracht ${avg.name}, 
            difficultyRating: ${avg.difficultyRating},  
            enjoymentRating: ${avg.funRating}`
        // .toFixed(1)

    }))
    return (
        <>
            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryGroup offset={20}>
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingAverage}
                        x="assignment"
                        y="difficultyRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingAverageWithLabels.map(
                            avg => avg.assignment
                        )}
                    />
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingAverage}
                        x="assignment"
                        y="enjoymentRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingAverageWithLabels.map(
                            avg => avg.assignment
                        )}
                    />
                </VictoryGroup>
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverage.map(
                        avg => avg.assignment
                    )}
                />
                <VictoryAxis dependentAxis />
            </VictoryChart >

            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentRatingAverage}
                    x="assignment"
                    y="difficultyRating"
                />
                <VictoryLine
                    style={{
                        data: { stroke: "#ff00ff" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentRatingAverage}
                    x="assignment"
                    y="enjoymentRating"
                />
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
                />
                <VictoryAxis dependentAxis />
            </VictoryChart>


        </>
    )
}
export default Bargraph