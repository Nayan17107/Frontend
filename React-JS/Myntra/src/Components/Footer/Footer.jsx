import React from 'react'
import './Footer.css'

const footerData = {
    columns: [
        { title: 'ONLINE SHOPPING', items: ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Sports'] },
        { title: 'USEFUL LINKS', items: ['Contact Us', 'Blog', 'Careers', 'Site Map', 'Corporate Info', 'Investor Relations'] },
        { title: 'CUSTOMER POLICIES', items: ['Returns Policy', 'FAQ', 'Privacy Policy', 'Terms & Conditions', 'Exchange Policy', 'Shipping Policy'] },
        { title: 'EXPERIENCE MYNTRA APP ON MOBILE', items: [] }
    ],
    popularSearches: [
        'Makeup','Dresses For Girls','T-Shirts','Sandals','Headphones','Babydolls','Blazers For Men','Handbags','Ladies Watches','Bags','Sport Shoes','Reebok Shoes','Puma Shoes','Boxers','Wallets','Tops','Earrings','Fastrack Watches','Kurtis','Nike','Smart Watches','Titan Watches','Designer Blouse','Gowns','Rings','Cricket Shoes','Forever 21','Eye Makeup','Photo Frames','Punjabi Suits','Bikini','Myntra Fashion Show','Lipstick','Saree','Watches','Dresses','Lehenga','Nike Shoes','Goggles','Bras','Suit','Chinos','Shoes','Adidas Shoes','Woodland Shoes','Jewellery','Designers Sarees'
    ],
    address: {
        lines: [
            'Buildings Alyssa,',
            'Begonia and Clover situated in Embassy Tech Village,',
            'Outer Ring Road,',
            'Devarabeesanahalli Village,',
            'Varthur Hobli,',
            'Bengaluru – 560103, India'
        ],
        cin: 'U72300KA2007PTC041799',
        phone: '+91-80-61561999'
    }
}

export default function Footer() {
    return (
        <footer className="bg-white border-top pt-5">
            <div className="container-lg">
                <div className="row mb-4">
                    {footerData.columns.map((col) => (
                        <div key={col.title} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>{col.title}</h5>
                            {col.title === 'EXPERIENCE MYNTRA APP ON MOBILE' ? (
                                <>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <img src="./img/footer-1.png" alt="App Store" className="img-fluid" style={{ maxWidth: '115px', height: '42px' }} />
                                        <img src="./img/footer-2.png" alt="Google Play" className="img-fluid" style={{ maxWidth: '120px', height: '42px' }} />
                                    </div>
                                    <p className="small text-muted mb-0">Exciting Offers & Faster Checkout with the Myntra App</p>
                                </>
                            ) : (
                                <ul className="list-unstyled">
                                    {col.items.map(item => (
                                        <li key={item} className="mb-2"><span className="text-muted small">{item}</span></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white border-top border-bottom py-4">
                <div className="container-lg">
                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>POPULAR SEARCHES</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {footerData.popularSearches.map((term) => (
                            <span key={term} className="popular-term small text-muted">{term}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-4 border-top">
                <div className="container-lg">
                    <div className="row align-items-start">
                        <div className="col-md-8">
                            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Registered Office Address</h6>
                            <address className="text-muted mb-0" style={{ fontStyle: 'normal', lineHeight: 1.8 }}>
                                {footerData.address.lines.map((line, idx) => (
                                    <span key={idx} className="d-block">{line}</span>
                                ))}
                            </address>
                        </div>

                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                            <p className="mb-1 text-muted">CIN: <span className="text-muted">{footerData.address.cin}</span></p>
                            <p className="mb-0">Telephone: <a href={`tel:${footerData.address.phone.replace(/[^+0-9]/g, '')}`} className="text-primary fw-bold">{footerData.address.phone}</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-top py-3">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
                            <p className="small text-muted mb-0">In case of any concern, <span className="text-primary fw-bold">Contact Us</span></p>
                        </div>
                        <div className="col-md-4 text-center mb-2 mb-md-0">
                            <p className="small text-muted mb-0">© 2025 www.myntra.com. All rights reserved.</p>
                        </div>
                        <div className="col-md-4 text-center text-md-end">
                            <p className="small text-muted mb-0">A Flipkart company</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 border-top">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="h5 fw-bold text-dark mb-3">ONLINE SHOPPING MADE EASY AT MYNTRA</h3>
                            <p className="text-muted small lh-lg mb-3">
                                If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Smart men's clothing</strong> - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Trendy women's clothing</strong> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Fashionable footwear</strong> - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Stylish accessories</strong> - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Fun and frolic</strong> - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                <strong>Beauty begins here</strong> - You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3 mt-4">AFFORDABLE FASHION AT YOUR FINGERTIPS</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3">MYNTRA INSIDER</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.
                            </p>

                            <ul className="text-muted small lh-lg mb-3 ps-3">
                                <li className="mb-2"><strong>Insider</strong> - Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions. Curated collections from celeb stylists.</li>
                                <li className="mb-2"><strong>Elite</strong> - VIP access to special sale events such as the End of Reason Sale (EORS) and product launches. Exclusive early access to Limited Edition products.</li>
                                <li className="mb-2"><strong>Icon</strong> - Chance to get on guest lists for special events.</li>
                            </ul>

                            <h3 className="h5 fw-bold text-dark mb-3 mt-4">MYNTRA STUDIO - THE PERSONALISED FASHION FEED YOU WOULDN'T WANT TO MISS OUT ON</h3>
                            <p className="text-muted small lh-lg mb-3">
                                The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty. Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named the Myntra Studio, this personalised search feed brings you the latest men and women's fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.
                            </p>

                            <h4 className="h6 fw-bold text-dark mb-2">Keep Up With What Your Favourite Fashion Icons Are Upto</h4>
                            <p className="text-muted small lh-lg mb-3">
                                The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear. Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a 'Stories' feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.
                            </p>

                            <h4 className="h6 fw-bold text-dark mb-2">Quick Fashion Tip And Tricks</h4>
                            <p className="text-muted small lh-lg mb-3">
                                Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.
                            </p>

                            <h4 className="h6 fw-bold text-dark mb-2">Updates on What Is Trending and New Product Launches</h4>
                            <p className="text-muted small lh-lg mb-3">
                                Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more. Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
                            </p>

                            <h4 className="h6 fw-bold text-dark mb-2">Explicit Step-By-Step Beauty Routines From Experts</h4>
                            <p className="text-muted small lh-lg mb-3">
                                Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.
                            </p>

                            <h4 className="h6 fw-bold text-dark mb-2">Celebrity Confessions And A Look Into Their Lives</h4>
                            <p className="text-muted small lh-lg mb-3">
                                A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3 mt-4">MYNTRA APP</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Myntra, India's no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3">HISTORY OF MYNTRA</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Becoming India's no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                The Myntra shopping app came into existence in the year 2015 to further encourage customers' shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before.
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h3>
                            <p className="text-muted small lh-lg mb-3">
                                Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
                            </p>

                            <p className="text-muted small lh-lg mb-3">
                                Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
