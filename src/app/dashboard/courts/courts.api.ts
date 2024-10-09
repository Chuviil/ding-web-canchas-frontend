export async function getCourts() {
    const data = await fetch("http://localhost:4000/api/courts", {cache: "no-store"});
    return await data.json();
}

export async function createCourt(name: string, sport_type: string[]) {
    const data = await fetch("http://localhost:4000/api/courts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, sport_type}),
    });

    if (!data.ok) throw new Error("Error creating court");

    return await data.json();
}

export async function deleteCourt(id: number) {
    const data = await fetch(`http://localhost:4000/api/courts/${id}`, {
        method: "DELETE",
    });

    if (!data.ok) throw new Error("Error deleting court");
}

export async function getCourt(id: number | string) {
    const data = await fetch(`http://localhost:4000/api/courts/${id}`, {cache: "no-store"});
    if (!data.ok) throw new Error("Error fetching court");
    return await data.json();
}

export async function updateCourt(id: number, name: string, sport_type: string[]) {
    const data = await fetch(`http://localhost:4000/api/courts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, sport_type}),
    });

    if (!data.ok) throw new Error("Error updating court");

    return await data.json();
}
