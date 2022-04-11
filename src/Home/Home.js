import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            {/* Home Backgorund */}
            <div className='home-container'>
                <img
                    className='home-image'
                    src='https://m.media-amazon.com/images/I/71nG-+EpeqL._SX3000_.jpg'
                    alt='Amazon Background' />

                {/* Row of cards with products */}
                <div className='home-row'>
                    <Product
                        id='157632'
                        title='Echo 4ª geração'
                        price={664.05}
                        image='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/Azul/Echo_02_186x116_azul_02._SY116_CB418712313_.jpg'
                        rating={5} />
                    <Product
                        id='682904'
                        title='Echo Dot 3ª geração'
                        price={299.89}
                        image='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/echodot372x232._SY116_CB431062868_.jpg" class="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/echodot372x232._SY232_CB431062868_.jpg'
                        rating={4} />

                </div>

                <div className='home-row'>
                    <Product
                        id='247583'
                        title='Fire TV Stick 4K'
                        price={426.55}
                        image='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/Azul/186x116_10Gsheldonplus._SY116_CB665651038_.jpg" class="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/Azul/372x232_10Gsheldonplus._SY232_CB665651038_.jpg'
                        rating={3} />
                    <Product
                        id='831462'
                        title='Novo Echo Show 5 (2ª Geração, versão 2021)'
                        price={569.05}
                        image='https://m.media-amazon.com/images/I/71fzcZQlbqS._AC_SY200_.jpg'
                        rating={4} />
                    <Product
                        id='023512'
                        title='Kindle 10ª geração'
                        price={379.05}
                        image='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/Azul/jaeger_186x116_azul._SY116_CB670602059_.jpg" class="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/quadcard/Azul/jaeger_372x232_azul._SY232_CB670602059_.jpg'
                        rating={2} />
                </div>

                <div className='home-row'>
                    <Product
                        id='458538'
                        title='Echo Show 8: com tela e som imersivo'
                        price={1614.05}
                        image='https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDQ0MzFmZDUt/NDQ0MzFmZDUt-YjIzMjc0NTUt-w379._SY304_CB625880926_.jpg" class="landscape-image" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/NDQ0MzFmZDUt/NDQ0MzFmZDUt-YjIzMjc0NTUt-w758._SY608_CB625880921_.jpg'
                        rating={5} />
                </div>

            </div>
        </div>
    )
}

export default Home