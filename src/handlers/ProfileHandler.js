module.exports = class ProfileHandler {
  element(element) {
    switch (element.getAttribute('id')) {
      case 'profile':
        element.removeAttribute('style')
        break

      case 'avatar':
        element.setAttribute('src', avatar_src)
        break

      case 'name':
        element.append('Angel Campbell')
    }
  }
}

const avatar_src =
  'https://media-exp1.licdn.com/dms/image/C4D03AQEuMua9Mc2wgg/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=KKxGpOFZoWLrzX1Mah4YV-zph645seN-IpmyWy96sP8'
