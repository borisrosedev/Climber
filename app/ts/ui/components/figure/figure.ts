interface FigureProps {
	src: string
	alt: string
}

function figure(data: FigureProps) {
	return `
        <figure class="custom-figure">
            <img src="${data.src}" alt="${data.alt}" />
        </figure>
    
    `
}

export default figure
