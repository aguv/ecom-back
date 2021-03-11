function randomLink () {
  const names = [
    'https://frappe.com.ar/img/productos/1003552.png',
    'https://frappe.com.ar/img/productos/122223.png',
    'https://frappe.com.ar/img/productos/1006826.png',
    'https://frappe.com.ar/img/productos/100023.png',
    'https://frappe.com.ar/img/productos/1006487.png',
    'https://frappe.com.ar/img/productos/1003444.png',
    'https://frappe.com.ar/img/productos/110298.png',
    'https://frappe.com.ar/img/productos/1048.png',
    'https://frappe.com.ar/img/productos/1003481.png',
    'https://frappe.com.ar/img/productos/1029.png',
    'https://frappe.com.ar/img/productos/1036.png',
    'https://frappe.com.ar/img/productos/1003471.png',
    'https://frappe.com.ar/img/productos/1003478.png',
    'https://frappe.com.ar/img/productos/1003406.png',
    'https://frappe.com.ar/img/productos/1003391.png'
  ]

  return `${names[Math.floor(Math.random() * 13) + 1 ]}`
}


function nameGenerator () {
  const names = ['PAZ','LAGARDE', 'DON VALENTIN', 'RUTINI', 'LUIGI BOSCA', 'OASIS', 'MANOS NEGRAS', 'PORTILLO', 'SALENTEIN']
  const types = ['MALBEC', 'ROSADO', 'BLANCO', 'PETIT NOIR', 'SYRAH', 'CABERNET SAUVIGNON', 'OTRO CABERNET', 'BLANCO BIEN SUAVE', 'HERMOSO', 'DELIZIA']

  return `${names[+Math.random(1).toString().split('.')[1][0]]} ${types[+Math.random(1).toString().split('.')[1][0]]}`
}
function weightGenerator () {
  return Math.random(1).toString().split('.')[1].slice(0,3)
}

function wineGenerator () {
  let name = nameGenerator()
  return {
    name,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac ligula lacinia libero tempus tristique non nec mauris. Sed scelerisque mauris in ex imperdiet sollicitudin. Morbi eget ultrices dolor. Maecenas augue est, ultrices ac ultricies vel, maximus vestibulum augue. Phasellus a quam eu nunc dictum egestas nec sit amet risus. Nam enim nisl, lacinia sed nisi sit amet, congue convallis risus. Nam in turpis vehicula, sagittis lectus vitae, elementum leo. Donec nec fringilla risus, sit amet aliquet arcu. Pellentesque vitae porta erat.`,
    weight: weightGenerator(),
    brand: name.split(' ')[0],
    quantity: weightGenerator(),
    image_path: randomLink(),
    price: weightGenerator()
  }
}

let arr = []
for(let i=0; i<15; i++) {
  arr.push(wineGenerator())
}

module.exports = arr