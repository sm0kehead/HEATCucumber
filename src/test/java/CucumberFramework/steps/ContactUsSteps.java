package CucumberFramework.steps;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class ContactUsSteps {
    WebDriver driver;


    @Before()
    public void setup() {

        //System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }


    @Given("^I access webdriveruniversity$")
    public void i_access_webdriveruniversity() throws Throwable {
        System.out.println("I access webdriveruniversity");
        driver.get("http://webdriveruniversity.com/");
        Thread.sleep(2000);
    }

    @When("^I click on the contact us button$")
    public void i_click_on_the_contact_us_button() throws Throwable {
        driver.findElement(By.xpath("//h1[contains(text(), 'CONTACT US')]")).click();
        System.out.println("I click on the contact us button");
    }

    @When("^I enter a \"([^\"]*)\" firstname$")
    public void i_enter_a_firstname(String firstname) throws Throwable {
        Set<String> st= driver.getWindowHandles();
        Iterator<String> it = st.iterator();
        String parent =  it.next();
        String child =it.next();
//swtich to parent
        driver.switchTo().window(parent);
        System.out.println("Returned to parent");
// switch to child
        driver.switchTo().window(child);

       /*String winHandleBefore = driver.getWindowHandle();
       for (String winHandle : driver.getWindowHandle()) {
           driver.switchTo().window(winHandle);
       }*/

       driver.findElement(By.cssSelector("input[name='first_name']")).sendKeys(firstname);
        //driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("Arto");
        //driver.findElement(By.xpath("//input[contains(@name, 'first_name')]")).sendKeys("Arto");

        System.out.println("I enter a firstname");
    }

    @When("^I enter a \"([^\"]*)\" lastname$")
    public void i_enter_a_lastname(String lastname) throws Throwable {
        driver.findElement(By.name("last_name")).sendKeys(lastname);
        System.out.println("I enter a lastname");
    }

    @When("^I enter an email address$")
    public void i_enter_an_email_address() throws Throwable {
        driver.findElement(By.name("email")).sendKeys("a@gmail.com");
        System.out.println("I enter an email address");
    }

    @When("^I enter comments$")
    public void i_enter_comments(DataTable tab1) throws Throwable {
        List<List<String>> data1 = tab1.raw();
        driver.findElement(By.name("message")).sendKeys(data1.get(0).get(2)+ "\n");
        driver.findElement(By.name("message")).sendKeys(data1.get(1).get(2)+ "\n");
        //driver.findElement(By.name("message")).sendKeys(data.get(1).get(0)+ "\n");
        //driver.findElement(By.name("message")).sendKeys(data.get(1).get(1));
        System.out.println("I enter comments");
    }

    @When("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        System.out.println("I click on the submit button");
    }

    @Then("^the information should successfully be submitted via the contact us form$")
    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
        System.out.println("the information should successfully be submitted via the contact us form");
    }
    @When("^I enter a non firstname$")
    public void i_enter_a_non_firstname() throws Throwable {
        System.out.println("I enter a non firstname");
    }

    @When("^I enter a non lastname$")
    public void i_enter_a_non_lastname() throws Throwable {
        System.out.println("I enter a non lastname");
    }

    @When("^I enter a non email address$")
    public void i_enter_a_non_email_address() throws Throwable {
        System.out.println("I enter a non email address");
    }

    @When("^I enter no comments$")
    public void i_enter_no_comments() throws Throwable {
        System.out.println("I enter no comments");
    }

    @When("^I click on the resset button$")
    public void i_click_on_the_resset_button() throws Throwable {
        System.out.println("I click on the resset button");
    }

    @Then("^the information should not be successfully be submitted via the contact us form$")
    public void the_information_should_not_be_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
        System.out.println("the information should not be successfully be submitted via the contact us form");
    }

    @Then("^the user should also be notified of the problem$")
    public void the_user_should_also_be_notified_of_the_problem() throws Throwable {
        System.out.println("the user should also be notified of the problem");
    }

    @After()
        public void teardown(){
        //driver.manage().deleteAllCookies();
        //driver.close();
        //driver.quit();
    }


}
