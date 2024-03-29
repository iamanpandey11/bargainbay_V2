import styles from "./About.module.css"
export default function About() {
  return (
    <div className="min-h-screen  border-2">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl my-4 font font-semibold text-center">
            About Bargein Bay
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Bargain Bay Tech Gadgets! Here, we are dedicated to
              bringing you the latest and greatest in technology, all at
              affordable prices. Whether you're a tech enthusiast looking for
              the newest gadgets or a budget-conscious shopper seeking great
              deals, you've come to the right place.
            </p>

            <p>
              At Bargain Bay, we understand the excitement of exploring
              cutting-edge technology without breaking the bank. Our team scours
              the market to handpick a curated selection of tech gadgets ranging
              from smartphones and tablets to smart home devices and wearable
              tech. We believe that everyone should have access to the latest
              innovations, and we strive to make that possible with our
              affordable prices.
            </p>

            <p>
              Join our community of tech-savvy shoppers and discover a world of
              incredible deals and fantastic finds. Whether you're shopping for
              yourself or searching for the perfect gift, Bargain Bay Tech
              Gadgets has something for everyone. Explore our website today and
              embark on a journey of discovery and savings!
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-500">
      <div className={styles.parent}>
<div className={styles.div1}><img src="../images/logo.jpg" alt="aman" /> </div>
<div className={styles.div2}> </div>
<div className={styles.div3}> </div>
</div>
      </div>
    </div>
  );
}
