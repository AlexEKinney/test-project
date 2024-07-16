import csv
import pickle
import os
import random

# Initialize variables for Generation 0 values
gen_0_juveniles = 0
gen_0_adults = 0
gen_0_seniles = 0
num_new_generations = 0
disease_trigger_point = 0

def main_menu():
    print("Main Menu:")
    print("1. Set Generation 0 values")
    print("2. Display Generation 0 values")
    print("3. Run the model")
    print("4. Export data")
    print("5. Set disease trigger point")
    print("6. Quit")

def set_gen_0_values():
    global gen_0_juveniles, gen_0_adults, gen_0_seniles, num_new_generations
    
    print("Set Generation 0 values:")
    gen_0_juveniles = int(input("Enter initial number of juveniles (in thousands): "))
    gen_0_adults = int(input("Enter initial number of adults (in thousands): "))
    gen_0_seniles = int(input("Enter initial number of seniles (in thousands): "))
    num_new_generations = int(input("Enter number of new generations (5 to 25): "))

def set_disease_trigger_point():
    global disease_trigger_point
    disease_trigger_point = int(input("Enter the total population disease trigger point: "))

def display_gen_0_values():
    print("Generation 0 values:")
    print(f"Initial number of juveniles: {gen_0_juveniles} thousand")
    print(f"Initial number of adults: {gen_0_adults} thousand")
    print(f"Initial number of seniles: {gen_0_seniles} thousand")
    print(f"Number of new generations: {num_new_generations}")

def run_model():
    global gen_0_juveniles, gen_0_adults, gen_0_seniles, num_new_generations, disease_trigger_point
    
    juveniles = gen_0_juveniles
    adults = gen_0_adults
    seniles = gen_0_seniles

    print("Generation\tJuveniles\tAdults\tSeniles\tTotal")

    for generation in range(num_new_generations):
        # Generate random survival rates for each generation
        survival_rate_juveniles = random.uniform(0.5, 1)  # Random float between 0.5 and 1
        survival_rate_adults = random.uniform(0.5, 1)  # Random float between 0.5 and 1
        survival_rate_seniles = random.uniform(0.5, 1)  # Random float between 0.5 and 1

        # Apply disease factor if total population exceeds trigger point
        disease_factor = random.uniform(0.2, 0.5) if (juveniles + adults + seniles) > disease_trigger_point else 1

        new_juveniles = int(adults * survival_rate_adults * survival_rate_juveniles * 2.5)
        new_adults = int(adults * survival_rate_adults*2.5)
        new_seniles = int(adults * survival_rate_adults * survival_rate_seniles * disease_factor)

        juveniles = new_juveniles
        adults = new_adults
        seniles = new_seniles

        total_population = juveniles + adults + seniles

        print(f"{generation}\t\t{juveniles}\t\t{adults}\t\t{seniles}\t\t{total_population}")

def export_data():
    global gen_0_juveniles, gen_0_adults, gen_0_seniles, num_new_generations, disease_trigger_point

    data = {
        "gen_0_juveniles": gen_0_juveniles,
        "gen_0_adults": gen_0_adults,
        "gen_0_seniles": gen_0_seniles,
        "num_new_generations": num_new_generations,
        "disease_trigger_point": disease_trigger_point,
    }

    filename = input("Enter a suitable filename for export (without extension): ")

    if os.path.exists(filename + ".csv"):
        overwrite = input("File already exists. Do you want to overwrite? (yes/no): ")
        if overwrite.lower() != "yes":
            print("Export canceled.")
            return

    with open(filename + ".csv", mode="w", newline="") as file:
        writer = csv.writer(file)
        
        # Write header
        writer.writerow(["Generation", "Juveniles", "Adults", "Seniles", "Total"])

        juveniles = gen_0_juveniles
        adults = gen_0_adults
        seniles = gen_0_seniles

        for generation in range(num_new_generations):
            survival_rate_juveniles = random.uniform(0.5, 1)
            survival_rate_adults = random.uniform(0.5, 1)
            survival_rate_seniles = random.uniform(0.5, 1)
            disease_factor = random.uniform(0.2, 0.5) if (juveniles + adults + seniles) > disease_trigger_point else 1

            new_juveniles = int(adults * survival_rate_adults * survival_rate_juveniles*1.1)
            new_adults = int(adults * survival_rate_adults * survival_rate_adults)
            new_seniles = int(adults * survival_rate_adults * survival_rate_seniles * disease_factor)

            juveniles = new_juveniles
            adults = new_adults
            seniles = new_seniles

            total_population = juveniles + adults + seniles

            # Write data for each generation
            writer.writerow([generation, juveniles, adults, seniles, total_population])

    print(f"Data exported successfully to {filename}.csv")

# Main program loop
while True:
    main_menu()
    user_choice = input("Enter your choice: ")

    if user_choice == "1":
        set_gen_0_values()
    elif user_choice == "2":
        display_gen_0_values()
    elif user_choice == "3":
        run_model()
    elif user_choice == "4":
        export_data()
    elif user_choice == "5":
        set_disease_trigger_point()
    elif user_choice == "6":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please enter a number from 1 to 6.")
